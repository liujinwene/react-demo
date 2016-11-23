import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducer';
import App from './app';
import { Provider } from 'react-redux';
import configStore from './configStore';

const store = configStore();

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
	)