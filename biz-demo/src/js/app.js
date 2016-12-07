import React, {
	Component
} from 'react';
import {
	listCat,
	listCommoByCat
} from './actions';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.setCats = this.setCats.bind(this);
		this.setCommos = this.setCommos.bind(this);

		this.listCat = this.listCat.bind(this);
		this.listCommoByCat = this.selectCommos.bind(this);
		this.listFirstCatCommo = this.listFirstCatCommo.bind(this);

		this.state = {
			cats: [],
			commos: []
		};
	}

	componentWillMount() {
		this.listCat();
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

	listCat() {
		listCat(this.listFirstCatCommo);
	}

	listFirstCatCommo(cats) {
		this.setCats(cats);
		if (cats != undefined && cats.length > 0) {
			selectCommos(cats[0].id, this.setCommos);
		}
	}

	selectCommos(e) {
		console.log('catId=' + e.target.value);
		listCommoByCat(e.target.value, this.setCommos);
	}

	render() {
		console.log('render-cats=' + JSON.stringify(this.state.cats));
		console.log('render-commos=' + JSON.stringify(this.state.commos));

		const cats = this.state.cats.map(cat => {
			return <li><input type="button" value={cat.id} onClick={this.listCommoByCat} /></li>
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