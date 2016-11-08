import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addText } from './js/actions';

class App extends Component {
	
	render() {
		const { dispatch, texts } = this.props;
		
		return (
			<div>
				{
					texts.map((item) => <p>{item.text}</p>)
				}
				<input type='button' onClick={() => {dispatch(addText(texts.length, 'hi' + texts.length))}} value='addText'/>
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