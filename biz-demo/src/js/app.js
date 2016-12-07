import React, {
	Component
} from 'react';
import {
	listCat,
	listCommoByCat
} from './actions';
import {
	connect
} from 'react-redux';


class App extends Component {

	constructor(props) {
		super(props);

		this.listCat = this.listCat.bind(this);
		this.listCommoByCat = this.listCommosByCat.bind(this);
	}

	componentWillMount() {
		this.listCat();
	}

	listCat() {
		this.props.dispatch(listCat());
	}

	listCommosByCat(e) {
		console.log('catId=' + e.target.value);
		this.props.dispatch(listCommoByCat(e.target.value));
	}

	render() {
		const {
			cats,
			commos
		} = this.props;

		console.log('render-cats=' + JSON.stringify(cats));
		console.log('render-commos=' + JSON.stringify(commos));

		const catElements = cats.map(cat => {
			return <li><input type="button" value={cat.id} onClick={this.listCommoByCat} /></li>
		});

		const commoElements = commos.map(commo => {
			return <li>{commo.name}</li>
		});

		return (
			<div>
				<input type="button" onClick={this.listCat} />
				<ul>{catElements}</ul>
				<ul>{commoElements}</ul>
			</div>
		)
	}
}


function select(state) {
	return {
		cats: state.cats,
		commos: state.commos
	}
}

export default connect(select)(App);