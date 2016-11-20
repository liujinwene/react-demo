import React, { Component } from 'react';
import request from 'superagent';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {cats: []};
	}

	componentWillMount() {
		request.get('/bizservice/rest/front/commo/listCommoCatByCd')
		.then((result) => {
			if(result.status == 200) {
				this.setState({cats: result.body.response});
			} else {
				console.log('result fail.result=' + JSON.stringify(result));
			}
		});
	}

	render() {
		return (
			<div>
				<p>{JSON.stringify(this.state.cats)}</p>
			</div>
			)
	}
}
