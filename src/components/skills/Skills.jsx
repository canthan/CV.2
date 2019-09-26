import React from 'react';
import Brick from '../common/Brick';

import './Skills.scss';

export default class Skills extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Brick title="Info" />
				<div className="section__info">
					<span className="info__phone">
						<i className="fas fa-phone" />
						+48 609 092 887
					</span>
					<span className="info__mail">
						<i className="fas fa-envelope" />
						andrzej.globisz@gmail.com
					</span>
					<span className="info__city">
						<i className="fas fa-building" />
						City - Katowice
					</span>
					<span className="info__born">
						<i className="fas fa-child" />
						Born 28.12.1989
					</span>
				</div>
				<Brick title="skills" />
				<div className="section__skills">
					<p className="skill__title">Frontend</p>
					<ul className="skill__list">
						<li>
							<i className="fab fa-js-square" />
							JavaScript (ES6+)
						</li>
						<li>
							<i className="fab fa-html5" />
							CSS3, HTML5
						</li>
						<li>
							<i className="fas fa-angle-double-right" />
							TypeScript
						</li>
						<li>
							<i className="fab fa-react" />
							ReactJS
						</li>
						<li>
							<i className="fab fa-angular" />
							Angular 2+
						</li>
						<li>
							<i className="fas fa-angle-double-right" />
							Redux
						</li>
						<li>
							<i className="fas fa-angle-double-right" />
							Bootstrap
						</li>
						<li>
							<i className="fab fa-sass" />
							Sass
						</li>
					</ul>
					<p className="skill__title">Backend</p>
					<ul className="skill__list">
						<li>
							<i className="fab fa-node-js" />
							NodeJS
						</li>
						<li>
							<i className="fas fa-server" />
							Express, Koa
						</li>
						<li>
							<i className="fas fa-database" />
							MongoDB
						</li>
					</ul>
					<p className="skill__title">Testing</p>
					<ul className="skill__list">
						<li>
							<i className="fab fa-node-js" />
							Jest
						</li>
						<li>
							<i className="fas fa-angle-double-right" />
							Karma, Jasmine
						</li>
						<li>
							<i className="fas fa-angle-double-right" />
							Mocha, Chai
						</li>
					</ul>
					<p className="skill__title">Other</p>
					<ul className="skill__list">
						<li>
							<i className="fab fa-docker" />
							Docker
						</li>
						<li>
							<i className="fas fa-angle-double-right" />
							Webpack
						</li>
						<li>
							<i className="fas fa-angle-double-right" />
							TSlint, ESLint
						</li>
						<li>
							<i className="fas fa-angle-double-right" />
							Git, Gerrit
						</li>
						<li>
							<i className="fas fa-angle-double-right" />
							Npm, Yarn
						</li>
						<li>
							<i className="fas fa-angle-double-right" />
							Rally, Jenkins
						</li>
						<li>
							<i className="fas fa-angle-double-right" />
							Scrum, Kanban
						</li>
					</ul>
				</div>

				<Brick title="language" />
				<div className="section__language">
					<span>English (BULATS)</span>
					<span>
						<i className="fas fa-book-open" />
						Reading C1
					</span>
					<span>
						<i className="fas fa-headphones-alt" />
						Listening C2
					</span>
				</div>
			</React.Fragment>
		);
	}
}
