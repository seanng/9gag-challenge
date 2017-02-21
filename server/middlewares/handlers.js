const request = require('request');

const fetchPosts = (URL, reply, cb, posts=[], count=0, errCount=0) =>
  request.get(URL, (err, res, body) => {
    if (err) return reply(err);

    console.log('getting:: ', count)
    const parsed = safelyParseJSON(body);
    if (!parsed) return reply('parsing error');

    const { items } = parsed;
    const minId = items[items.length-1].id;
    items.forEach(item => posts.push(item))
    return cb(reply, minId, posts, ++count)
  })

const fetchSuccess = (reply, posts) => {
  // save to redis.
  return reply(null, posts);
}

const safelyParseJSON = (stringified) => {
  try {
    return JSON.parse(stringified)
  } catch (e) {
    return null;
  }
}

const furtherRequest = (reply, minId, posts, count) => {
  if (count === 10) return fetchSuccess(reply, posts);
  const baseURL = `https://www.instagram.com/9gag/media`
  const getURL = baseURL + `/?min_id=${minId}`
  return fetchPosts(getURL, reply, furtherRequest, posts, count)
}

const initialRequest = (proceed, reply) => {
  const getURL = 'https://www.instagram.com/9gag/media';
  return fetchPosts(getURL, reply, proceed);
}

const loadPosts = (req, res, attempt=1) =>
  initialRequest(furtherRequest, (err, posts) => {
    if (err) {
      console.log('error!:', err, attempt);
      if (attempt > 3) return res.status(400).send(err);
      return setTimeout( () => loadPosts(req, res, ++attempt), 1500);
    }
    return res.status(200).send(posts)
  })


module.exports = (action, req, res) => {
  switch (action) {
    case 'loadposts':
      return loadPosts(req, res);

    default:
      return res.status(404);
  }
}
