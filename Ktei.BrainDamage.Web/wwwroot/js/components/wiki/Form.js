import React from 'react';
import LabelsChooser from 'components/wiki/LabelsChooser';
import ContentEditor from 'components/wiki/ContentEditor';

export default class Form extends React.Component {
  componentDidMount() {
    $(this.refs.title).focus();
  }

  render() {
    const {
      labels,
      labelsLoading,
      labelsLoaded,
      item
     } = this.props;

    return (
      <form className="ui form">
        <h4 className="ui dividing header">Title:</h4>
        <div className="field">
          <input
            ref="title"
            type="text"
            defaultValue={item.title}
            onChange={this.handleChange.bind(this)}
          />
        </div>

        <h4 className="ui dividing header">Labels:</h4>
        <div className="field">
          <LabelsChooser
            ref="labelsChooser"
            labels={labels}
            loading={labelsLoading}
            loaded={labelsLoaded}
            defaultSelectedLabels={item.labels}
            onChange={this.handleChange.bind(this)}
          />
        </div>

        <h4 className="ui dividing header">Content:</h4>
        <div className="field">
          <ContentEditor
            ref="contentEditor"
            onChange={this.handleChange.bind(this)}
            defaultContent={item.content}
          />
        </div>
        <div className="ui teal button" tabIndex="0">Save</div>
      </form>
    );
  }

  handleChange() {
    const { onChange } = this.props;

    if (onChange) {
      onChange(this.item());
    }
  }

  item() {
    return {
      title: $(this.refs.title).val(),
      labels: this.refs.labelsChooser.labels(),
      content: this.refs.contentEditor.content()
    }
  }
}
