import React, { Component } from 'react';
import { Link } from 'react-router';

class News extends Component {
	render() {
		return (
				<div>
					<p><Link to="/title">title</Link></p>
					<p><Link to="/content">content</Link></p>
					<p>this is the news</p>
					{this.props.children}
				</div>
				)
	}
};

export default News;

