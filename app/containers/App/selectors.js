import { createSelector } from 'reselect';

const selectApp = (state) => state.get('app');

const displayOrder = () => createSelector(
  selectApp,
  (substate) => substate.get('order')
);

export {
  displayOrder,
};
