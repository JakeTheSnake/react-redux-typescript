import React, { StatelessComponent, FunctionComponent } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';


import { createStore } from 'redux';
import rootReducer from './store/rootReducer';
import App from './components/app/App';

const store = createStore(
  rootReducer, {}
);

const app = (
  <Provider store={store}>
    <App todos={store.getState()}/>
  </Provider>
);

render(app, document.getElementById('app-root'));