import DataService from './utils/dataservice';
import {
	dispatch
} from 'redux';


export const LIST_CAT = 'listCat';
export const LIST_COMMO_BY_CAT = 'listCommoByCat';

export function listCat() {
	console.log('action-listCat');
	return dispatch => {
		DataService.listCat((cats) => {
			dispatch({
				type: LIST_CAT,
				cats
			})
		});
	}
}

export function listCommoByCat(catId) {
	console.log('action-listCommoByCat-catId=' + catId);
	return dispatch => {
		DataService.listCommoByCat(catId, (commos) => {
			dispatch({
				type: LIST_COMMO_BY_CAT,
				commos
			})
		});
	};

}