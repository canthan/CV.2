import React from 'react';
import photo from '../../assets/img/photo2.jpg';
import placeholder from '../../assets/img/Untitled.jpg';

import './Photo.scss';

export default class Photo extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="image-wrapper">
					{/* <img src={placeholder} className="image-photo" /> */}
					<img src={photo} className="image-photo" />
				</div>
			</React.Fragment>
		);
	}
}
