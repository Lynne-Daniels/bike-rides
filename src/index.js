import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import data from './data'

let element = <App placeholder = {data.placeholder} />;
ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
