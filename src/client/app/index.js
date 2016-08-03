import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './view';

render(<App/>, document.querySelector('#root'));