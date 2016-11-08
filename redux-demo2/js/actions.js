export const ADD_TEXT = 'add_text';

export function addText(text) {
	return {
		type: ADD_TEXT,
		key: text,
		text
	};
}