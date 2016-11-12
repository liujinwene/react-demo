import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import News from './news';
import Title from './title';
import Content from './content';

render((
	<Router history={hashHistory}>
		<Route path="/news" component={News}>
		 	<Route path="/title(/:text)" component={Title} />
		 	<Route path="/content(/:text)" component={Content} />
		</Route>
	</Router>
	), document.getElementById('app'))

