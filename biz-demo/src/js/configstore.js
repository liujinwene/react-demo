import {
	applyMiddleware,
	createStore
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configStore(initState) {
	return createStoreWithMiddleware(reducer, initState);
}