import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addText } from './actions';
import css from '../css/main.css';

class App extends Component {
	
	render() {
		const { dispatch, texts } = this.props;
		
		return (
			<div>
				<input className={css.greyBackground} type="button" 
					onClick={() => {dispatch(addText(texts.length, 'hi' + texts.length))}} 
					value="addText" />

				<div className={css.greyBackground}>
					{
						texts.map((item) => <p>{item.text}</p>)
					}
				</div>
			</div>
			)
	}
}

function select(state) {
	return {
		texts: state.texts
	};
}

export default connect(select)(App);