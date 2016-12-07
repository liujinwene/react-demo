import {
	LIST_CAT,
	LIST_COMMO_BY_CAT,
	listCat,
	listCommoByCat
} from './actions';
import {
	combineReducers
} from 'redux';


function cats(state = [], action) {
	console.log('reducer-cats-state=' + JSON.stringify(state));
	console.log('reducer-cats-action=' + JSON.stringify(action));

	if (action === undefined || action.type != LIST_CAT) {
		return state;
	}
	return action.cats;
}

function commos(state = [], action) {
	console.log('reducer-commos-state=' + JSON.stringify(state));
	console.log('reducer-commos-action=' + JSON.stringify(action));

	if (action === undefined || action.type != LIST_COMMO_BY_CAT) {
		return state;
	}
	return action.commos;
}

const reducer = combineReducers({
	cats,
	commos
});

export default reducer;