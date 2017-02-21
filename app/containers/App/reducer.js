/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  SORT_BY,
  LOAD_APP,
  LOAD_SUCCESS,
  LOAD_FAILURE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  order: 'time',
  loaded: false,
  error: false,
  data: [],
});

function appReducer(state = initialState, action) {
  switch (action.type) {

    case LOAD_APP:
      return state
        .set('loaded', false)
        .set('error', false)
        .set('data', []);

    case LOAD_SUCCESS:
      return state
        .set()
        .set('loaded', true)
        .set('error', false)
        .set('data', action.data);

    case LOAD_FAILURE:
      return state
        .set('loaded', true)
        .set('error', true)
        .set('data', []);

    case SORT_BY:
      return state
        .set('order', action.order)
        .set('loaded', false)
        .set('error', false)
        .set('data', []);

    default:
      return state;
  }
}

export default appReducer;
