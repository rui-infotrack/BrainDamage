import React from 'react';
import { Converter } from 'showdown';

export default ({ markdown }) => (
  <div dangerouslySetInnerHTML={{__html: new Converter().makeHtml(markdown)}} ></div>
);
