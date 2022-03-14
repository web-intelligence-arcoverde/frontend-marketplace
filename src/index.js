import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import SidebarCartProduct from 'src/components/organisms/Sidebar';

import store from './store';
import Routes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
    <SidebarCartProduct />
  </Provider>,
  document.getElementById('root'),
);
