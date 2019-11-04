import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  //allocate different classNames for each, so as to ease styling
  <div className={`${size} menu-item`} onClick={() => history.push(`${linkUrl}`)}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);
//withRouter() method takes in an comonent and returns a similar compoenent which possess the ability
//to interact with the router dom.
export default withRouter(MenuItem);
