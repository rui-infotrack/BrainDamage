import React from 'react';

export default ({ items }) => {
  return (
    <div className="ui relaxed divided list">
      {items.map(x => (
        <div className="item" key={x.id}>
          <i className="large file text outline middle aligned icon"></i>
          <div className="content">
            <a className="header">{x.title}</a>
            <div className="description">{x.updatedAt}</div>
          </div>
        </div>
      ))}
    </div>
  )
};
