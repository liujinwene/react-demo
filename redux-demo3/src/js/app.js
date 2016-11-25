import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import {
	addText,
	listCat
} from './actions';

class App extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleAddText = this.handleAddText.bind(this);
		this.handleListCat = this.handleListCat.bind(this);

		this.state = {
			value: ''
		};
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	handleAddText(e) {
		this.props.dispatch(addText(this.state.value));
	}

	handleListCat() {
		this.props.dispatch(listCat());
	}

	render() {
		let textElements = null;
		let catElements = null;
		const {
			texts,
			cats
		} = this.props;
		if (texts != undefined && texts.length > 0) {
			textElements = texts.map(text =>
				<li>{text}</li>
			);
		}

		if (cats != undefined && cats.length > 0) {
			catElements = cats.map(cat =>
				<li>{cat.name}</li>
			);
		}

		return (
			<div>
				<input type="text" onChange={this.handleChange} value={this.state.value} />
				<input type="button" onClick={this.handleAddText} value="addText" />
				<input type="button" onClick={this.handleListCat} value="listCat" />
				<ul>{textElements}</ul>
				<ul>{catElements}</ul>
			</div>
		)
	}
}

function select(state) {
	return {
		texts: state.texts,
		cats: state.cats
	}
}

export default connect(select)(App);