
export const ADD_TEXT = 'add_text';

export function addText(text) {
	console.log('addText-text=' + text);
	return {
		type: ADD_TEXT,
		text
	}
}
