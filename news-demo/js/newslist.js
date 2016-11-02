import React from 'react';
import NewsHeader from './newsheader';
import NewsItem from './newsitem';

export default class NewsList extends React.Component {

	render() {
		var names = ['a','b','c'];

		return (
			<div className="newsList">
				{names}
				<NewsHeader />
				<NewsItem />
			</div>
			);
	}
}