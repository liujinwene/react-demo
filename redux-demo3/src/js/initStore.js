import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import reduxLogMiddleware from 'redux-logger';


const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, reduxLogMiddleware)(createStore);

export default function configStore(initStore) {
	console.log("entry-configStore");
	var result = createStore(rootReducer);
	console.log(JSON.stringify(result));
	return result;
}