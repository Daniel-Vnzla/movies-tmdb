import React from "react";
import { Link } from "react-router-dom";
import {
	CircularProgressbarWithChildren,
	buildStyles,
} from "react-circular-progressbar";
import "./SlideShowCard.css";

import arrow from "../../images/arrow.png";

const percentage = 66;
const styles = buildStyles({
	strokeLinecap: "round",
	textColor: "#fff",
	pathColor: "#af1b3f",
	trailColor: "#0d1f2d",
	backgroundColor: "#af1b3f",
});

const SlideShowCard = ({ data = {} }) => {
	if (!data) return "Loading...";
	console.log(data);
	return (
		<div className="card-wrapper">
			<div className="back-drop">
				<img src={data.backdrop_path} alt={data.title} />
			</div>
			<div className="img-section">
				<Link to="/movies/nombre-de-la-pelicula">
					<img className="img" alt="img" src={data.poster_path}></img>
				</Link>
				<div className="trailer-container">
					<button className="trailer-btn">
						<span className="btn-title">Trailer</span>
						<img className="arrow" src={arrow} alt="arrow" />
					</button>
				</div>
			</div>
			<div className="info-section">
				<div className="rating">
					<CircularProgressbarWithChildren
						value={data.vote_average * 10}
						strokeWidth={5}
						styles={styles}
					>
						<p className="rating-text">{`${data.vote_average * 10}%`}</p>
					</CircularProgressbarWithChildren>
				</div>
				<p className="release-date">
					Release: <span>{data.release_date}</span>
				</p>
				<Link to="/movies/nombre-de-la-pelicula">
					<h2 className="title">{data.title}</h2>
				</Link>
				<p className="alternative-title">{data.original_title}</p>
				<p className="sinopsis">{data.overview}</p>
			</div>
		</div>
	);
};

export default SlideShowCard;
