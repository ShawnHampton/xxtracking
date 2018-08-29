import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/app/app';
import provider from './reduxProvider';
import 'typeface-roboto';

ReactDOM.render(provider(<App />), document.getElementById('app'));
