/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOAD_APP } from './constants';
import { loadSuccess, loadFailure } from './actions';

import request from 'utils/request';

/**
 * Request/response handler
 */
export function* getPosts() {
  console.log('listening.')
  const requestURL = `http://localhost:3333/api/loadposts`;
  const requestOptions = { method: 'GET', timeout: 0, }

  try {
    // Call our request helper (see 'utils/request')
    console.log('calling GET request:', requestURL);
    const posts = yield call(request, requestURL, requestOptions);
    console.log('Posts retrieved!', posts);
    yield put(loadSuccess(posts));
  } catch (err) {
    yield put(loadFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* appWatcher() {
  // Watches for LOAD_APP actions and calls getPosts when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_APP, getPosts);

  // Suspend execution until location changes
  // yield take(LOCATION_CHANGE);
  // yield cancel(watcher);
}

// Bootstrap sagas
export default [
  appWatcher,
];
