import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { todoApp } from './reducer';
import App from './app';

let rootElement = document.getElementById('app');
let store = createStore(todoApp);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);
