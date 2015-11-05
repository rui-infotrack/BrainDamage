import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class Create extends React.Component {
  componentDidMount() {
    // const { loaded, loadWiki } = this.props;

    // if (!loaded) {
    //   loadWiki();
    // }
  }

  render() {
    return (
      <div>
        <h1>Create Wiki Item</h1>
      </div>
    );
  }
}


function mapStateToProps(state) {
  // const { wiki } = state;

  return {
    // loading: wiki.loading,
    // loaded: wiki.loaded,
    // labels: wiki.labels
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // loadWiki: () => dispatch(loadWiki())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
