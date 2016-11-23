import { combineReducers } from 'redux';
import { ADD_TEXT, LIST_CAT } from './actions';

function texts(state = [], action) {
	console.log('texts-state=' + JSON.stringify(state));
	console.log('texts-action=' + JSON.stringify(action));

	if(action === undefined || action.text === undefined) {
		return state;
	}

	if(action.type != ADD_TEXT) {
		return state;
	}

	console.log('back-texts');

	return [
		...state,
		action.text
	]

}

function cats(state = [], action) {
	console.log('cats-state=' + JSON.stringify(state));
	console.log('cats-action=' + JSON.stringify(action));

	if(action === undefined || action.cats === undefined) {
		return state;
	}

	if(action.type != LIST_CAT) {
		return state;
	}

	console.log('back-cats');

	return [...action.cats];
}


const rootReducer = combineReducers({
	texts,
	cats
});

export default rootReducer;