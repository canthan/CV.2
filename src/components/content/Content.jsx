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
						After studies sfor four years I was working in international
						engineering company as control systems engineer. For last year I
						have been working as JavaScript developer taking part in development
						of both frontend and backend part of applications.
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
						<li>
							Taking part in development of both frontend and backend parts of
							applications (Angular/React, NodeJS)
						</li>
						<li>
							Following code standards, writing good quality code covered with
							unit tests
						</li>
						<li>Work in international agile teams for foreign clients</li>
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
					<h1 className="content__title">
						09.2011 - Ośrodek Badawczo – Rozwojowy Urządzeń Mechanicznych
						„OBRUM” sp. z o. o.
					</h1>
					<ul className="content__list">
						<li>Programming HMI panels (Siemens), 3D modeling</li>
					</ul>
					<h1 className="content__title">
						08.2010 - ENERGO-MOC WZORCOWNIA, sp. z o.o.
					</h1>
					<ul className="content__list">
						<li>
							Taking part in creating database application for electric meters
						</li>
					</ul>
					<Brick title="Hobbies" />
					<p>
						Programming, sport climbing, alpinism, hiking, martial arts, skiing,
						homebrewing
					</p>
				</div>
			</React.Fragment>
		);
	}
}
