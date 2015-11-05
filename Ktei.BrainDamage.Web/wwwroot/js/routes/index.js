import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from 'layouts/CoreLayout';
import WikiIndex from 'views/wiki/Index';
import WikiCreate from 'views/wiki/Create';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={WikiIndex} />
    <Route path='/wiki' component={WikiIndex} />
    <Route path='/wiki/create' component={WikiCreate} />
  </Route>
);
