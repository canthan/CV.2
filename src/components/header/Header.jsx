import React from 'react';

import './Header.scss';

export default class Header extends React.Component {
	render() {
		return (
			<React.Fragment>
				{/* <h1 className="name">aaa</h1>
				<h2 className="title">aa</h2> */}
				<h1 className="header__name">Andrzej Globisz</h1>
				<h2 className="header__title">JavaScript Developer</h2>
			</React.Fragment>
		);
	}
}
