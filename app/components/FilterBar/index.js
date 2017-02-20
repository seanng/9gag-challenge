/**
*
* FilterBar
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Label = styled.h5`
  position: relative;
  display: block;
  color: black;
  padding: 15px;
  line-height: 20px;
  margin: 0px
  height: 50px
`;

const FilterBar = ({ sortBy }) => {
  const sortByTime = () => sortBy('time');
  const sortByLikes = () => sortBy('likes');
  const sortByComments = () => sortBy('comments');

  return (
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed btn-info" data-toggle="collapse" data-target="#navbar-collapse">
            <span className="sr-only">
              <FormattedMessage {...messages.srLabel} />
            </span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#">
            <FormattedMessage {...messages.header} />
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <Label>
                <FormattedMessage {...messages.filterBy} />
              </Label>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={sortByTime}>
                <FormattedMessage {...messages.creationTime} />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={sortByLikes}>
                <FormattedMessage {...messages.likeCount} />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={sortByComments}>
                <FormattedMessage {...messages.commentCount} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

FilterBar.propTypes = {
  sortBy: React.PropTypes.func,
};

export default FilterBar;
