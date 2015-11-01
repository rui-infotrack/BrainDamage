import React, { PropTypes } from 'react';
import TopNav from 'components/TopNav';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : PropTypes.element
  }

  render() {
    return (
      <div>
        <TopNav />
        <div className="ui main container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
