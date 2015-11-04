import React from 'react';
import MarkdownView from './MarkdownView';

function filterByLabel(item, labelId) {
  const { labels } = item;
  return labels.indexOf(labelId) >= 0 || labelId === -1;
}

export default ({ items, activeLabelId }) => {
  return (
    <div className="ui divided items">
      {items.filter(x => filterByLabel(x, activeLabelId)).map(x => (
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
