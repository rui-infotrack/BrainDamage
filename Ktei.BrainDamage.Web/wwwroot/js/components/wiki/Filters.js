import React from 'react';
import classnames from 'classnames';

const all = { id: -1, text: 'All' };

export default ({ labels, activeLabelId, selectFilter }) => (
  <span className="ui labels">
    {[all].concat(labels).map(x => (
      <a
        key={x.id}
        className={classnames('ui label', { teal: x.id == activeLabelId })}
        onClick={selectFilter.bind(this, x.id)}
      >
        {x.text}
      </a>
    ))}
  </span>
);
