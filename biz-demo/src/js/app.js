import React, {
	Component
} from 'react';
import request from 'superagent';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);

		this.state = {
			cats: []
		};
	}

	handleClick() {
		this.listCat(this);
	}

	listCat(component) {
		request.get('/bizservice/rest/front/commo/listCommoCatByCd')
			.then((result) => {
				if (!component.requestIsSuccess(result)) {
					alert("request fail.result=" + JSON.stringify(result));
				} else {
					component.setState({
						cats: result.body.response
					});
				}
			})
	}

	requestIsSuccess(result) {
		if (result === undefined || result.status !== 200 || result.body.status != 200) {
			return false;
		}
		return true;
	}



	render() {
		console.log('render-cats=' + JSON.stringify(this.state.cats));
		const cats = this.state.cats.map(cat => {
			return <li>{cat.name}</li>
		});

		return (
			<div>
				<input type="button" onClick={this.handleClick} />
				<ul>{cats}</ul>
			</div>
		)
	}
}