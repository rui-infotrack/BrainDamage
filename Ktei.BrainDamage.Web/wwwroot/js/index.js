require('../../semantic/dist/semantic.css');
require('../sass/app.scss');

require('semantic');

import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'containers/Root';

$(document).ready(() => {
  ReactDOM.render(<Root />, document.getElementById('root'));
});
