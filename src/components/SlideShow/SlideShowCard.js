import React from "react";

import arrow from "../../images/arrow.png";

import "./SlideShowCard.css";

const SlideShowCard = ({ data = {} }) => {
	if (!data) return "Loading...";

	return (
		<div className="card-wrapper">
			<div className="back-drop">
				<img src={data.backdrop_path} alt={data.title} />
			</div>
			<div className="img-section">
				<img alt="img" src={data.poster_path}></img>
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
					Release Date: <span>{data.release_date}</span>
				</p>
				<h2 className="title">{data.title}</h2>
				<p className="alternative-title">{data.original_title}</p>
				<p className="sinopsis">{data.overview}</p>
			</div>
		</div>
	);
};

export default SlideShowCard;
