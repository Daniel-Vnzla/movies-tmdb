import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CircularProgressBar from "../CircularProgressBar.js";
import "./PosterContainer.css";

const PosterContainer = ({ image, title, ratingValue, id, type }) => {
	return (
		<div className="movie-poster">
			<Link to={`/programs/${type}/${id}`}>
				<div className="img-container">
					<img loading="lazy" className="img" src={image} alt={image} />
					<div className="rating-container">
						<CircularProgressBar
							value={ratingValue}
							text={`${ratingValue}%`}
							className="rating-text"
						/>
					</div>
				</div>
				<p className="title">{title}</p>
			</Link>
		</div>
	);
};

PosterContainer.protoTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	ratingValue: PropTypes.number.isRequired,
	id: PropTypes.number.isRequired,
	type: PropTypes.string.isRequired,
};

export default PosterContainer;
