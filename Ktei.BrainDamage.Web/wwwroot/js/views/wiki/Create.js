import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Form from 'components/wiki/Form';
import {
  loadWikiLabels,
  updateNewItem
} from 'actions/WikiActions';

class Create extends React.Component {
  static propTypes = {
    labelsLoading: PropTypes.bool.isRequired,
    labelsLoaded: PropTypes.bool.isRequired,
    labels: PropTypes.array.isRequired,
    newItem: PropTypes.object.isRequired,
    loadWikiLabels: PropTypes.func.isRequired,
    updateNewItem: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { labelsLoaded, loadWikiLabels } = this.props;

    if (!labelsLoaded) {
      loadWikiLabels();
    }
  }

  render() {
    const {
      labelsLoaded,
      labelsLoading,
      labels,
      newItem
    } = this.props;

    return (
      <div>
        <h1>Create Wiki Item</h1>
        <Form
          labelsLoading={labelsLoading}
          labelsLoaded={labelsLoaded}
          labels={labels}
          item={newItem}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }

  handleChange(newItem) {
    const { updateNewItem } = this.props;

    updateNewItem(newItem);
  }
}


function mapStateToProps(state) {
  const { wikiCreate: { labelsLoading, labelsLoaded, labels, newItem } } = state;

  return {
    labelsLoading,
    labelsLoaded,
    labels,
    newItem
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadWikiLabels: () => dispatch(loadWikiLabels()),
    updateNewItem: (newItem) => dispatch(updateNewItem(newItem))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
