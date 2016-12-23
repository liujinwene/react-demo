import React, {
	Component
} from 'react';
import WeUI from 'react-weui';


export default class App extends Component {
	render() {
		const {
			Button
		} = WeUI;

		return (
			<div>
				<Button type="warn" size="normal">hello wechat</Button>
			</div>
		)
	}
}