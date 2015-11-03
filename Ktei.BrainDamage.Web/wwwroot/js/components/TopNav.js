import React from 'react';
import { Link } from 'react-router';

export default () => (
  <div className="ui fixed inverted teal menu">
    <div className="ui container">
      <Link to="/" className="header item">
        Brain Damage
      </Link>
      <Link to="/" className="item">Wiki</Link>
      <Link to="/feature" className="item">Feature</Link>
    </div>
  </div>
);


