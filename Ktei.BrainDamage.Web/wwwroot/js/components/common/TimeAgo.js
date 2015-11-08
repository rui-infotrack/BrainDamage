import React from 'react';
import moment from 'moment';

export default ({ iso, ...rest }) => (
  <span {...rest}>{moment(iso).fromNow()}</span>
);
