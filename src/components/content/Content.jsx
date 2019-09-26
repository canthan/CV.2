import React from 'react';

import Brick from '../common/Brick';

import './Content.scss';

export default class Content extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="content">
					<Brick title="About me" />
					<p className="content__about">
						I graduated Mechatronics obtaining Master of Engineering degree.
						During course of studies I have learnt solid basics of programming.
						After studies for four years I was working in international
						engineering company as control systems engineer. For last 2 years I
						have been working as JavaScript developer taking part in development
						of both frontend (Angular, React) and backend part of applications.
					</p>
					<Brick title="Education" />
					<h1 className="content__title">
						2012 - 2013 - Silesian University of Technonology, Electrical
						Department
					</h1>
					<p>
						Mechatronics, Application of Information Technologies in
						Mechatronics, Master
					</p>
					<h1 className="content__title">
						2008 - 2012 - Silesian University of Technonology, Electrical
						Department
					</h1>
					<p>Mechatronics, Engineer</p>
					<Brick title="Experience" />
					<h1 className="content__title">
						09.2017 - still - EPAM Systems - Junior/Regular JavaScript Developer
					</h1>
					<ul className="content__list">
						<li>Taking part in development of both frontend (Angular, React + Redux) and backend (NodeJS) parts of applications</li>
						<li>Following code standards, SOLID, DRY, KISS and YAGNI principles. Writing good quality code covered with unit tests</li>
						<li>Working in international scrum teams for foreign clients</li>
						<li>Working closely with Product Owners to clarify business requirements and figure out best implementation approaches</li>
						<li>Working with backend developers and QA team during development on the project</li>
					</ul>
					<h1 className="content__title">
						03.2013 - 08.2017 - FLUOR S.A. - associate engineer, control systems
						department
					</h1>
					<ul className="content__list">
						<li>
							Preparing project documentation (instrumentation and control
							systems) for polish and foreign clients
						</li>
						<li>
							Author's supervision on construction site, cooperation with
							contractors
						</li>
						<li>Contacts with polish and foreign clients</li>
						<li>
							Work in international company with highly developed quality system
						</li>
					</ul>
					<Brick title="Hobbies" />
					<p>
						Sport climbing, alpinism, hiking, skiing, homebrewing, cooking, programming
					</p>
				</div>
			</React.Fragment>
		);
	}
}
