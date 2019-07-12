import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "tachyons";
import App from './App';
// import {robots} from './robots';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <App/>, document.getElementById('root'));
registerServiceWorker();
