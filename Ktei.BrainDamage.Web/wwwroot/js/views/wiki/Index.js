import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Filters from 'components/wiki/Filters';
import Items from 'components/wiki/Items';
import {
  load,
  selectFilter
} from 'actions/WikiActions';

class Index extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    labels: PropTypes.array.isRequired,
    activeLabelId: PropTypes.number.isRequired,
    items: PropTypes.array.isRequired,
    selectFilter: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { loaded, load } = this.props;

    if (!loaded) {
      load();
    }
  }

  render() {
    const {
      loading,
      labels,
      activeLabelId,
      selectFilter,
      items
    } = this.props;

    if (loading) {
      return (
        <div className="ui active centered large inline loader"></div>
      );
    }

    return (
      <div>
        <h1>Damaged Wiki</h1>
        <Filters
          labels={labels}
          activeLabelId={activeLabelId}
          selectFilter={selectFilter}
        />
        <Items items={items} activeLabelId={activeLabelId} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { wikiIndex: { loading, loaded, labels, activeLabelId, items } } = state;

  return {
    loading,
    loaded,
    labels,
    activeLabelId,
    items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    load: () => dispatch(load()),
    selectFilter: (x) => dispatch(selectFilter(x))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
