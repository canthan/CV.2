import React from 'react';
import './Brick.scss';

export default function Brick(props) {
	return (
		<div className="brick">
			<h1 className="brick__title">{props.title}</h1>
		</div>
	);
}
