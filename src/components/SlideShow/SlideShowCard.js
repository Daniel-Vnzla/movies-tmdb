import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./SlideShowCard.css";
import arrow from "../../images/arrow.png";

import CircularProgressBar from "../CircularProgressBar.js";

const SlideShowCard = ({ data }) => (
	<div className="card-wrapper">
		<div className="back-drop">
			<img loading="lazy" src={data.backdrop_path} alt={data.title} />
		</div>
		<div className="img-section">
			<Link to={`/programs/movies/${data.id}`}>
				<img
					loading="lazy"
					className="img"
					alt="img"
					src={data.poster_path}
				></img>
			</Link>
			<div className="trailer-container">
				<button className="trailer-btn">
					<span className="btn-title">Trailer</span>
					<img loading="lazy" className="arrow" src={arrow} alt="arrow" />
				</button>
			</div>
		</div>
		<div className="info-section">
			<div className="rating">
				<CircularProgressBar
					value={data.vote_average}
					text={`${data.vote_average}%`}
					className="rating-text"
				/>
			</div>
			<p className="release-date">
				Release: <span>{data.release_date}</span>
			</p>
			<Link to={`/programs/movies/${data.id}`}>
				<h2 className="title">{data.title}</h2>
			</Link>
			<p className="alternative-title">{data.original_title}</p>
			<p className="sinopsis">{data.overview}</p>
		</div>
	</div>
);

SlideShowCard.propTypes = {
	data: PropTypes.object.isRequired,
};

export default SlideShowCard;
