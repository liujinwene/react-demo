import { applyMiddleware,createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';
import createLogger from 'redux-logger';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configStore(initState) {
	return createStoreWithMiddleware(rootReducer, initState);
}