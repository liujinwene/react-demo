import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addText } from './actions';

class App extends Component {
	constructor(props) {
		super(props);
		this.handerClick = this.handerClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {value: ''};
	}

	handerClick() {
		this.props.dispatch(addText(this.state.value));
	}

	handleChange(e) {
		this.setState({value: e.target.value});
	}

	render() {
		const texts = this.props.texts;
		console.log('render-texts=' + JSON.stringify(texts));

		let elements = null;
		if(texts != undefined && texts.length > 0) {
			elements = texts.map(text => <li>{text}</li>);
		}

		return (
			<div>
				<input type='text' onChange={this.handleChange} value={this.state.value} />
				<input type='button' onClick={this.handerClick} value='submit' />
				<ul>{elements}</ul>
			</div>
			)
	}
	
}

function select(state) {
	console.log('select-texts=' + state.texts);
	return {texts: state.texts};
}

export default connect(select)(App);
