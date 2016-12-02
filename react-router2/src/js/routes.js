import App from './app';
import User from './user';


const routes = [{
	path: '/app2',
	component: App,
	indexRoute: {
		component: User
	}
}, {
	path: '/',
	component: App,
	indexRoute: {
		onEnter: (nextState, replace) => replace('/user')
	}
}, {
	path: '/app',
	component: App
}, {
	path: '/user',
	component: User
}, {
	path: 'shop',
	onEnter: (nextState, replace) => replace('/user')
}]

export default routes;