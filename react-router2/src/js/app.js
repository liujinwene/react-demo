import React, { Component } from 'react';
import { IndexLink,Link } from 'react-router';

export default class App extends Component {

	render() {
		return (
			<div>
				<IndexLink to="/">IndexLink to Home</IndexLink>
				<br/>
				<Link to="/">Link to Home</Link>
				<p>hi</p>
				{this.props.children}
			</div>
			)

	}
}