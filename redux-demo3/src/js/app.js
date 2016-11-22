import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addText } from './actions';
import rootReducer from './reducer';

class App extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {value: ''};
	}

	handleClick() {
		this.props.dispatch(addText(this.state.value));
	}
	
	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	render() {
		const { cats } = this.props;
		console.log('cats=' + JSON.stringify(cats));
		let textElements = null;
		if(cats !== undefined && cats.length > 0) {
			textElements = cats.map(cat => <p>cat</p>);
		}

		return (
			<div>
				{textElements}
				<input type='text' value={this.state.value} onChange={this.handleChange}/>
				<input type='button' value='submit' onClick={this.handleClick} />
			</div>
			)

	}
}

function select(state) {
	return {
		 cats: state.cats
	}
}

export default connect(select)(App);