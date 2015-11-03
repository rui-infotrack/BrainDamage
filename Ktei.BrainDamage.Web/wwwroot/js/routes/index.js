import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from 'layouts/CoreLayout';
import WikiIndex from 'views/wiki/Index';
import Feature from 'views/Feature';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={WikiIndex} />
    <Route path='/feature' component={Feature} />
  </Route>
);
