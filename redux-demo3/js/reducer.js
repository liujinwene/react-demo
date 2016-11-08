import { ADD_TEXT } from './actions';
import {combineReducers} from 'redux';

function texts(state = [], action) {
	switch(action.type) {
		case ADD_TEXT:
			return [
				...state,
				{
					key: action.key,
					text: action.text
				}
			];
		default:
			return state;

	}

}

const todoApp = combineReducers({
	texts
});

export { todoApp };