import React, {
	Component
} from 'react';
import {
	listCat,
	selectCommos
} from './actions';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.listCat = this.listCat.bind(this);
		this.selectCommos = this.selectCommos.bind(this);
		this.setCats = this.setCats.bind(this);
		this.setCommos = this.setCommos.bind(this);
		this.selectFirstCatCommos = this.selectFirstCatCommos.bind(this);

		this.state = {
			cats: [],
			commos: []
		};

	}

	componentWillMount() {
		this.listCat();
	}

	listCat() {
		listCat(this.selectFirstCatCommos);
	}

	selectFirstCatCommos(cats) {
		this.setCats(cats);
		if (cats != undefined && cats.length > 0) {
			selectCommos(cats[0].id, this.setCommos);
		}
	}

	setCats(cats) {
		this.setState({
			cats
		});
	}

	setCommos(commos) {
		this.setState({
			commos
		});
	}

	selectCommos(e) {
		console.log('catId=' + e.target.value);
		selectCommos(e.target.value, this.setCommos);
	}

	render() {
		console.log('render-cats=' + JSON.stringify(this.state.cats));
		console.log('render-commos=' + JSON.stringify(this.state.commos));

		const cats = this.state.cats.map(cat => {
			return <li><input type="button" value={cat.id} onClick={this.selectCommos} /></li>
		});

		const commos = this.state.commos.map(commo => {
			return <li>{commo.name}</li>
		});

		return (
			<div>
				<input type="button" onClick={this.listCat} />
				<ul>{cats}</ul>
				<ul>{commos}</ul>
			</div>
		)
	}
}