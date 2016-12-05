import React, {
	Component
} from 'react';
import {
	listCat
} from './actions';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.setCats = this.setCats.bind(this);

		this.state = {
			cats: []
		};
	}

	handleClick() {
		listCat(this.setCats);
	}

	setCats(cats) {
		this.setState({
			cats
		});
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