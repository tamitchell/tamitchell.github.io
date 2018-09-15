import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './components/App';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
