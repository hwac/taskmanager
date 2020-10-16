import React from 'react';
import {render} from 'react-dom';
import './index.scss';
import App from './App';

import { Provider } from "mobx-react";

import memberStore from "./stores/memberStore";
import userStore from "./stores/userStore";

const stores = {
  memberStore,
  userStore
};

render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);