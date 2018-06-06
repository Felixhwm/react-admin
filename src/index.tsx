import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Todo from './store'
import { Provider } from 'mobx-react'
import './mock'

ReactDOM.render(
  <Provider todo={Todo}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();



