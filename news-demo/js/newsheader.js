import React from 'react';

export default class NewsHeader extends React.Component {
	render() {
		return (
			<div className ="newsHeader">
				{this.getLogo()}
				{this.getTitle()}
			</div>
			);
	}

	getLogo() {
		return (
		<div className="newsHeader-logo">
			<a href="http://www.baidu.com"><img src="./images/1.png" /></a>
		</div>
		);	
	}

	getTitle() {
		return (
			<div className="newsHeader-title">
				Hacker News
			</div>
		);
	}
}