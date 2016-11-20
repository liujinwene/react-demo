import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './app';
import About from './about';
import Repos from './repos';

render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="/about" component={About} />
			<Route path="/repos" component={Repos} />
		</Route>
	</Router>
	), document.getElementById('app'));