/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Components
import FilterBar from 'components/FilterBar';
import Feed from 'components/Feed';

// Redux
import { sortBy } from './actions';
import { displayOrder } from './selectors';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <FilterBar sortBy={this.props.sortBy} />
        <Feed order={this.props.order} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortBy: (order) => dispatch(sortBy(order)),
  };
};

const mapStateToProps = createStructuredSelector({
  order: displayOrder(),
});

App.propTypes = {
  sortBy: React.PropTypes.func,
  order: React.PropTypes.string,
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(App);
