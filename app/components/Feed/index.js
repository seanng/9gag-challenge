/**
*
* Feed
*
*/

import React from 'react';
// import styled from 'styled-components';


const Feed = ({ order }) => (
  <div className="container">
    {order}
  </div>
);


Feed.propTypes = {
  order: React.PropTypes.func,
};

export default Feed;
