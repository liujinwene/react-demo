import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';
import App from './app';

const store = createStore(rootReducer);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
	)