import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CreateButton from 'components/wiki/CreateButton';
import Filters from 'components/wiki/Filters';
import Items from 'components/wiki/Items';
import {
  loadWiki,
  selectFilter
} from 'actions/WikiActions';

export default class Index extends React.Component {
  static propTypes = {
    labels: PropTypes.array.isRequired,
    activeLabelId: PropTypes.number.isRequired,
    items: PropTypes.array.isRequired,
    selectFilter: PropTypes.func.isRequired,
    loadWiki: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { loadWiki } = this.props;

    loadWiki();
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
        <CreateButton />
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
  const { wiki } = state;

  return {
    loading: wiki.loading,
    labels: wiki.labels,
    activeLabelId: wiki.activeLabelId,
    items: wiki.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadWiki: () => dispatch(loadWiki()),
    selectFilter: (x) => dispatch(selectFilter(x))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
