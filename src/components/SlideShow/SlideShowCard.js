import React from "react";
import poster from "../../images/poster.jpg";
import arrow from "../../images/arrow.png";

import "./SlideShowCard.css";

const SlideShowCard = (props) => {
	return (
		<div className="card-wrapper">
			<div className="img-section">
				<img alt="img" src={poster}></img>
				<div className="trailer-container">
					<button className="trailer-btn">
						<span className="btn-title">Trailer</span>
						<img className="arrow" src={arrow} alt="arrow" />
					</button>
				</div>
			</div>
			<div className="info-section">
				<div className="rating">99%</div>
				<p className="release-date">
					Release Date: <span>12-12-2222</span>
				</p>
				<h2 className="title">titulo de una pelicula</h2>
				<p className="alternative-title">nombre alternativo</p>
				<p className="sinopsis">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</div>
	);
};

export default SlideShowCard;
