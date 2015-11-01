import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : PropTypes.element
  }

  render() {
    return (
      <div>
        <div>
          <Link to='/feature'>Feature</Link>
          {this.props.children}
        </div>
      </div>
    );
  }
}
