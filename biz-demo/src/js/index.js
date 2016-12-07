import React, {
	Component
} from 'react';
import {
	render
} from 'react-dom';
import App from './app';
import {
	Provider
} from 'react-redux';
import configStore from './configstore';

const store = configStore();

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
)