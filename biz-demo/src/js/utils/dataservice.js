import request from 'superagent';

const listCatUrl = '/bizservice/rest/front/commo/listCommoCatByCd';
const selectCommosUrl = '/bizservice/rest/front/commo/listByCat';


function get(url, callback) {
	console.log('get-url' + url);
	request.get(url)
		.then((result) => doCallback(result, callback));
}

function post(url, params, callback) {
	console.log('post-url' + url);

	let formStr = '';
	for (let i in params) {
		if (params.hasOwnProperty(i)) {
			formStr += i + '=' + params[i] + '&';
		}
	}
	if (formStr != undefined && formStr != '') {
		formStr = formStr.substring(0, formStr.length - 1);
	}

	console.log('formStr=' + formStr);

	request.post(url)
		.set('Content-Type', 'application/x-www-form-urlencoded')
		.send(formStr)
		.then((result) => doCallback(result, callback));
}

function doCallback(result, callback) {
	if (!requestIsSuccess(result)) {
		alert("request fail.result=" + JSON.stringify(result));
	} else {
		callback(result.body.response);
	}
}

function requestIsSuccess(result) {
	if (result === undefined || result.status !== 200 || result.body.status != 200) {
		return false;
	}
	return true;
}

function listCat(callback) {
	post(listCatUrl, {}, callback);
}

function selectCommos(catId, callback) {
	post(selectCommosUrl, {
		catId
	}, callback);
}



const DataService = {
	listCat,
	selectCommos
};

export default DataService;