import React from "react";
import PropTypes from "prop-types";
import "./SubHeader.css";

import CircularProgressBar from "../CircularProgressBar.js";

const SubHeader = ({
	title,
	poster,
	backDrop,
	overview,
	originalTitle,
	rating,
}) => {
	return (
		<div className="sub-header">
			<div className="backdrop">
				<img
					src={`https://image.tmdb.org/t/p/w500/${backDrop}`}
					alt={title}
				/>
			</div>
			<div className="rating-section">
				<CircularProgressBar
					value={rating}
					text={`${rating}%`}
					className="rating-text"
				/>
			</div>
			<div className="description">
				<div className="img-container">
					<div className="float-image-container">
						<img
							src={`https://image.tmdb.org/t/p/w500/${poster}`}
							alt={title}
						/>
					</div>
				</div>
				<div className="overview-section">
					<h2 className="title">{title}</h2>
					<p className="original-title">{originalTitle}</p>
					<p className="sinopsis">{overview}</p>
				</div>
			</div>
		</div>
	);
};

SubHeader.propTypes = {
	title: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	backDrop: PropTypes.string.isRequired,
	originalTitle: PropTypes.string.isRequired,
	overview: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
};
export default SubHeader;
