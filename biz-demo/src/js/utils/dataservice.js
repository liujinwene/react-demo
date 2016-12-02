import React, {
	Component
} from 'react';
import request from 'superagent';


export default class DataService extends Component {
	listCat() {
		request.get('/bizservice/rest/front/commo/listCommoCatByCd')
			.then((result) => {
				if (!requestIsSuccess(result)) {
					alert("request fail.result=" + JSON.stringify(reuslt));
				} else {
					return result.body.response;
				}
			})
	}

	requestIsSuccess(result) {
		if (result === undefined || result.status !== 200 || result.body.errorCode != 200) {
			return false;
		}
		return true;
	}
}