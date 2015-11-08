import React from 'react';
import classnames from 'classnames';

export default class LabelsChooser extends React.Component {

  constructor(props) {
    super(props);

    const selectedLabelIds = {};
    (this.props.defaultSelectedLabels || []).forEach(x => {
      selectedLabelIds[x] = true;
    });
    this.state =  {
      selectedLabelIds
    }
  }

  labels() {
    return Object.keys(this.state.selectedLabelIds)
      .map(x => parseInt(x, 10));
  }

  render() {
    const { loading, labels } = this.props;

    if (loading) {
      return (
        <div className="ui active centered small inline loader"></div>
      );
    }

    const { selectedLabelIds } = this.state;
    return (
      <span className="ui labels">
        {labels.map(x => (
          <a
            key={x.id}
            className={classnames('ui label', { teal: selectedLabelIds[x.id] })}
            onClick={this.handleLabelClick.bind(this, x.id)}
          >
            {x.text}
          </a>
        ))}
      </span>
    );
  }

  handleLabelClick(labelId) {
    let { selectedLabelIds } = this.state;
    if (selectedLabelIds[labelId]) {
      delete selectedLabelIds[labelId];
    } else {
      selectedLabelIds[labelId] = true;
    }
    this.setState(Object.assign({}, {
      selectedLabelIds
    }));

    const { onChange } = this.props;
    if (onChange) {
      onChange(selectedLabelIds);
    }
  }
}
