import React from 'react';
import { Link } from 'react-router';

export default () => (
  <div className="ui fixed inverted teal menu">
    <div className="ui container">
      <Link to="/" className="header item">
        Brain Damage
      </Link>
      <div className="ui simple dropdown item">
        <Link to="/">Wiki <i className="dropdown icon"></i></Link>
        <div className="menu">
          <Link to="/wiki/create" className="item">New Item</Link>
        </div>
      </div>
    </div>
  </div>
);
