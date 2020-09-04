import React, { useState } from "react";
import { Link, Route, useRouteMatch, Switch } from "react-router-dom";
import "./InfoMenu.css";

import Overview from "../InfoContainer/Overview/Overview.js";
import Videos from "../InfoContainer/Videos.js";
import Staff from "../InfoContainer/Staff.js";
import Companies from "../InfoContainer/Companies.js";
import Recommendations from "../InfoContainer/Recommendations.js";
import Similar from "../InfoContainer/Similar.js";

const InfoView = () => {
	const { url, path } = useRouteMatch();
	const [activeOption, setOption] = useState("overview");

	const menuOptions = {
		overview: Overview,
		videos: Videos,
		staff: Staff,
		companies: Companies,
		recommendations: Recommendations,
		similar: Similar,
	};

	return (
		<div className="info-view">
			<nav className="navbar">
				{Object.keys(menuOptions).map((option) => {
					return (
						<Link
							key={option}
							onClick={() => setOption(option)}
							to={`${url}/${option}`}
							className={
								option === activeOption ? "navbar-item active" : "navbar-item"
							}
						>
							{option}
						</Link>
					);
				})}
			</nav>
			<Switch>
				{Object.keys(menuOptions).map((option) => (
					<Route
						key={option}
						exact
						path={`${path}/${option}`}
						component={menuOptions[option]}
					/>
				))}
			</Switch>
		</div>
	);
};

export default InfoView;
