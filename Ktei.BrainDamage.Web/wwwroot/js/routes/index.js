import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from 'layouts/CoreLayout';
import Home from 'views/Home';
import Feature from 'views/Feature';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={Home} />
    <Route path='/feature' component={Feature} />
  </Route>
);
