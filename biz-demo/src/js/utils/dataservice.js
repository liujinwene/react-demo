import request from 'superagent';


function get(url, callback) {
	request.get(url).then(callback);
}

function post(url, params, callback) {

}

function listCat(callback) {
	get('/bizservice/rest/front/commo/listCommoCatByCd', (result) => {
		if (!requestIsSuccess(result)) {
			alert("request fail.result=" + JSON.stringify(result));
		} else {
			callback(result.body.response);
		}
	});
}

function requestIsSuccess(result) {
	if (result === undefined || result.status !== 200 || result.body.status != 200) {
		return false;
	}
	return true;
}


const DataService = {
	listCat
};

export default DataService;