


const loadposts = (req, res) => {
  console.log("we are in the loadpost function right now.")
  // send initial request to instagram.com/9gag/media
  // counter = 0.
  // storage = [].
  // responseHandler would push to storage and while (counter < 10), send requests with min_id.
  // counter ++
  // save to redis and respond with posts from storage.
}

module.exports = (action, req, res) => {
  console.log('the route is:', action)
  switch (action) {
    case 'loadposts':
      return loadposts(req, res);

    default:
      return res.status(404);
  }
}
