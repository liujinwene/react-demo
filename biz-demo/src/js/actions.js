import DataService from './utils/dataservice';


export const LIST_CATS = 'list-cats';
export const SELECT_COMMO = 'select-commo';

export function listCat(callback) {
	DataService.listCat(callback);
}

export function selectCommos(catId, callback) {
	DataService.selectCommos(catId, callback);
}