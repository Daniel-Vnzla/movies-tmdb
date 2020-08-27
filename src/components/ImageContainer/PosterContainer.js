import React from "react";
import { Link } from "react-router-dom";
import CircularProgressBar from "../CircularProgressBar.js";
import "./PosterContainer.css";

const PosterContainer = ({ image, title, ratingValue }) => {
	return (
		<div className="movie-poster">
			<Link to="/movies/nombre-de-una-pelicula">
				<div className="img-container">
					<img className="img" src={image} alt={image} />
					<div className="rating-container">
						<CircularProgressBar
							value={ratingValue}
							text={ratingValue}
							className="rating-text"
						/>
					</div>
				</div>
				<p className="title">{title}</p>
			</Link>
		</div>
	);
};

export default PosterContainer;
