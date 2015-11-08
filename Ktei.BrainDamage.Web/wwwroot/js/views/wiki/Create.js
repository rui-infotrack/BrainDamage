import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Form from 'components/wiki/Form';
import {
  loadLabels,
  updateNewItem,
  saveItem
} from 'actions/WikiActions';

class Create extends React.Component {
  static propTypes = {
    labelsLoading: PropTypes.bool.isRequired,
    labelsLoaded: PropTypes.bool.isRequired,
    labels: PropTypes.array.isRequired,
    newItem: PropTypes.object.isRequired,
    loadLabels: PropTypes.func.isRequired,
    updateNewItem: PropTypes.func.isRequired,
    saveItem: PropTypes.func.isRequired,
    busy: PropTypes.bool.isRequired
  };

  componentDidMount() {
    const { labelsLoaded, loadLabels } = this.props;

    if (!labelsLoaded) {
      loadLabels();
    }
  }

  render() {
    const {
      labelsLoaded,
      labelsLoading,
      labels,
      newItem,
      busy
    } = this.props;

    return (
      <div>
        <h1>Create Wiki Item</h1>
        <Form
          ref="form"
          labelsLoading={labelsLoading}
          labelsLoaded={labelsLoaded}
          labels={labels}
          item={newItem}
          onChange={this.handleChange.bind(this)}
          onSubmit={this.handleSubmit.bind(this)}
          busy={busy}
        />
      </div>
    );
  }

  handleChange(newItem) {
    const { updateNewItem } = this.props;

    updateNewItem(newItem);
  }

  handleSubmit(e) {
    e.preventDefault();

    const item = this.refs.form.item();
    const { saveItem } = this.props;
    saveItem(item);
  }
}

function mapStateToProps(state) {
  const { wikiSave: {
    labelsLoading,
    labelsLoaded,
    labels,
    newItem,
    busy
  } } = state;

  return {
    labelsLoading,
    labelsLoaded,
    labels,
    newItem,
    busy
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadLabels: () => dispatch(loadLabels()),
    updateNewItem: (newItem) => dispatch(updateNewItem(newItem)),
    saveItem: (item) => dispatch(saveItem(item))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
