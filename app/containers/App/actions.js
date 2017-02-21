/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  SORT_BY,
  LOAD_APP,
  LOAD_SUCCESS,
  LOAD_FAILURE,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */

export function loadApp() {
  return {
    type: LOAD_APP,
  };
}

export function loadSuccess(data) {
  return {
    type: LOAD_SUCCESS,
    data
  };
}

export function loadFailure(response) {
  return {
    type: LOAD_FAILURE,
    response
  };
}

export function sortBy(order) {
  return {
    type: SORT_BY,
    order,
  };
}
