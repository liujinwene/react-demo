import React, { Component } from 'react';
import { render } from 'react-dom';
import configStore from './initStore';
import { Provider } from 'react-redux';
import App from './app';

const store = configStore();

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
	)