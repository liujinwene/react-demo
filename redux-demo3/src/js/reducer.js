import { combineReducers } from 'redux';

function test(state = [], action) {
	console.log('test.state=' + JSON.stringify(state));
	console.log('test.action=' + JSON.stringify(action));
	return [
		...state,
		action.text
	]
}

const rootReducer = combineReducers({
	test
});

export default rootReducer;