import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CreateButton from 'components/wiki/CreateButton';
import Filters from 'components/wiki/Filters';
import Items from 'components/wiki/Items';
import { selectFilter } from 'actions/WikiActions';

export default class Index extends React.Component {
  static propTypes = {
    labels: PropTypes.array.isRequired,
    activeLabelId: PropTypes.number.isRequired,
    items: PropTypes.array.isRequired
  };  

  render() {
    const {
      labels,
      activeLabelId,
      selectFilter,
      items
    } = this.props;

    return (
      <div>
        <h1>Damaged Wiki</h1>
        <CreateButton />
        <Filters
          labels={labels}
          activeLabelId={activeLabelId}
          selectFilter={selectFilter}
        />
        <Items items={items} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { wiki } = state;

  return {
    labels: wiki.labels,
    activeLabelId: wiki.activeLabelId,
    items: wiki.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectFilter: (x) => dispatch(selectFilter(x))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
