import React from 'react';
import MarkdownView from './MarkdownView';

export default ({ items }) => {
  return (
    <div className="ui divided items">
      {items.map(x => (
        <div className="item" key={x.id}>
          <div className="content">
            <a className="header">{x.title}</a>
            <div className="extra">
              {x.updatedAt}
            </div>
            <div className="description">
              <MarkdownView markdown={x.content} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};
