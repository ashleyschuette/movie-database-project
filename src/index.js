import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
