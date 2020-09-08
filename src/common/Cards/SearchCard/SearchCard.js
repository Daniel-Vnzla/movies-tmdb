import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./SaerchCard.css";

import CircularProgressbar from "../../../components/CircularProgressBar.js";

const SearchCard = ({ id, title, img, date, type, overview, ratingValue }) => {
	return (
		<Link
			to={`/programs/${type}/${id}/overview`}
			className="program-card"
			data-overview={overview}
		>
			<div className="img">
				<img src={`https://image.tmdb.org/t/p/w500` + img} alt={title} />
			</div>
			<div className="description">
				<div className="rating">
					<CircularProgressbar
						text={`${ratingValue}%`}
						value={ratingValue}
						className="rating-text"
					/>
				</div>
				<h2 className="title">{title}</h2>
				<p className="date">{date}</p>
				<p className="media-type">{type}</p>
			</div>
		</Link>
	);
};

SearchCard.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	img: PropTypes.string,
	date: PropTypes.string,
	type: PropTypes.string,
	overview: PropTypes.string,
	ratingValue: PropTypes.number,
};

export default SearchCard;
