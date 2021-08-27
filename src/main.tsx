/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import './index.css';
import App from './App';

// Fonts will be available to app wide
import '@fontsource/roboto-mono';
import '@fontsource/material-icons';
import '@fontsource/bad-script';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
