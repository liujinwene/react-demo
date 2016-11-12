export const ADD_TEXT = 'ADD_TEXT';

export function addText(key, text) {
	return {
		type: ADD_TEXT,
		key,
		text
	};
}