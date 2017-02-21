import { createSelector } from 'reselect';

const selectApp = (state) => state.get('app');

const getDisplayOrder = () => createSelector(
  selectApp,
  (substate) => substate.get('order')
);

const getLoadingStatus = () => createSelector(
  selectApp,
  (substate) => substate.get('loaded')
);

const getErrorStatus = () => createSelector(
  selectApp,
  (substate) => substate.get('error')
);

export {
  getDisplayOrder,
  getLoadingStatus,
  getErrorStatus,
};
