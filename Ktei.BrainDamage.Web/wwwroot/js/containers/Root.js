import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';
import { ReduxRouter } from 'redux-router';
import configureStore from '../store/configureStore';

const store  = configureStore();

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ReduxRouter>
            {routes}
          </ReduxRouter>
        </div>
      </Provider>
    );
  }
}
