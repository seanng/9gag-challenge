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
import { sortBy, loadApp } from './actions';
import { getDisplayOrder, getLoadingStatus, getErrorStatus } from './selectors';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    console.log('component will mount.')
    this.props.loadApp()
  }

  renderLoading() {
    return (
      <div>
        Loading...
      </div>
    );
  }

  renderLoaded() {
    return (
      <div>
        <FilterBar sortBy={this.props.sortBy} />
        <Feed order={this.props.order} />
      </div>
    );
  }

  renderError() {
    return (
      <div>
        There was an error loading the app.
      </div>
    );
  }

  render() {
    // return this.renderLoaded()
    return this.props.isLoaded ? this.renderLoaded() : this.renderLoading()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortBy: (order) => dispatch(sortBy(order)),
    loadApp: () => dispatch(loadApp()),
  };
};

const mapStateToProps = createStructuredSelector({
  order: getDisplayOrder(),
  isLoaded: getLoadingStatus(),
  hasErrors: getErrorStatus(),
});

App.propTypes = {
  sortBy: React.PropTypes.func,
  order: React.PropTypes.string,
  isLoaded: React.PropTypes.bool,
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(App);
