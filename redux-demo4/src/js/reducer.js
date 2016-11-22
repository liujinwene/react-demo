import { combineReducers } from 'redux';

function texts(state = [], action) {
	console.log('reducer-action=' + JSON.stringify(action));
	console.log('reducer-state=' + JSON.stringify(state));

	if(action == undefined || action.text == undefined) {
		return state;
	}

	return [
		...state,
		action.text
	];
}

const rootReducer = combineReducers({
	texts
});

export default rootReducer;