import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./CarouselSecondary.css";

import PosterContainer from "../ImageContainer/PosterContainer.js";

import { useRedux } from "../../CustomHooks.js";

const CarouselSecondary = ({ title }) => {
	const getListOfPrograms = useRedux();
	const [activeButton, setActiveButton] = useState("movies");
	const carouselRef = useRef();

	function moveCarouselRight() {
		return (carouselRef.current.scrollLeft += carouselRef.current.offsetWidth);
	}

	function moveCarouselLeft() {
		return (carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth);
	}

	const setMoviesOrTvShows = () => {
		return getListOfPrograms[activeButton].popular.map((data, i) => (
			<PosterContainer
				title={data.title}
				image={data.poster_path}
				ratingValue={data.vote_average}
				key={i}
			/>
		));
	};

	return (
		<div className="carousel-wrapper">
			<div className="carousel-menu">
				<h2 className="title">{title}</h2>
				<nav className="options">
					<button
						onClick={() => setActiveButton("movies")}
						className={activeButton === "movies" ? "item active" : "item"}
					>
						Movies
					</button>
					<button
						onClick={() => setActiveButton("tvShows")}
						className={activeButton === "tv shows" ? "item active" : "item"}
					>
						Tv Shows
					</button>
				</nav>
			</div>
			<div ref={carouselRef} className="carousel-container">
				{setMoviesOrTvShows()}
			</div>

			<button onClick={moveCarouselRight} className="arrow-right">
				&#8250;
			</button>
			<button onClick={moveCarouselLeft} className="arrow-left">
				&#8249;
			</button>
		</div>
	);
};

CarouselSecondary.propTypes = {
	title: PropTypes.string.isRequired,
};

export default CarouselSecondary;
