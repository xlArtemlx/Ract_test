import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import HotDogService from './services/hotdog-service';
import { HotDogProvider } from './components/context';

import store from './store';

const hotdogService = new HotDogService();


ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <HotDogProvider value={hotdogService}>
        <Router>
          <App />
        </Router>
      </HotDogProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);