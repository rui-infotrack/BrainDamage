import React from 'react';
import MarkdownView from './MarkdownView';

export default class ContentEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: this.props.defaultContent
    }
  }

  componentDidMount() {
    $(this.refs.menu).find('.item').tab();
  }

  content() {
    return $(this.refs.textarea).val()
  }

  render() {
    const { content } = this.state;

    return (
      <div>
        <div ref="menu" className="ui top attached tabular menu">
          <a className="item active" data-tab="first">Markdown</a>
          <a className="item" data-tab="second">Preview</a>
        </div>
        <div className="ui bottom attached tab segment active" data-tab="first">
          <div className="field">
            <textarea
              ref="textarea"
              rows="20"
              value={content}
              onChange={this.handleChange.bind(this)}
            >
            </textarea>
          </div>
        </div>
        <div className="ui bottom attached tab segment" data-tab="second">
          <div className="field">
            <MarkdownView markdown={content} />
          </div>
        </div>
      </div>
    )
  }

  handleChange() {
    const content = $(this.refs.textarea).val();
    this.setState(Object.assign({}, {
      content
    }));

    const { onChange } = this.props;
    if (onChange) {
      onChange(content);
    }
  }
}
