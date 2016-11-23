import request from 'superagent';

export const ADD_TEXT = 'add-text';
export const LIST_CAT = 'list-cat';

export function addText(text) {
	return {
		type:ADD_TEXT,
		text
	}
}

export function listCat() {
	return dispatch => {
		return request.get('/bizservice/rest/front/commo/listCommoCatByCd')
				.then(result => {
					if(result.status === 200) {
						dispatch(returnListCat(result.body.response));
					}
				});
	}
}

function returnListCat(cats) {
	return {
		type: LIST_CAT,
		cats
	} 
}

