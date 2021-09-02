import React from 'react';
import ReactDOM from 'react-dom';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import { BrowserRouter } from 'react-router-dom';
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
		<BrowserRouter>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<Provider store={store}>
					<App />
				</Provider>
			</LocalizationProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
