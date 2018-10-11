import * as React from 'react';
import ReactToPrint from 'react-to-print';

import Content from './components/content/Content';
import Header from './components/header/Header';
import Photo from './components/photo/Photo';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';

// import photo from './assets/img/photo.jpg';

import './CV.scss';

export default class CV extends React.Component {
	render() {
		return (
			<div className="cv" id="printarea">
				<section className="no-padding">
					<div className="header-bg" />
					<div className="skills">
						<Photo />
					</div>
				</section>
				<section className="header">
					<Header />
				</section>
				<section className="skills">
					<Skills />
				</section>
				<section className="content">
					<Content />
				</section>
				<section className="footer">
					<Footer />
				</section>
			</div>
		);
	}
}

// export class Print extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<CV ref={el => (this.componentRef = el)} />
// 				<ReactToPrint
// 					trigger={() => <a href="#">Print this out!</a>}
// 					content={() => this.componentRef}
// 				/>
// 			</div>
// 		);
// 	}
// }
