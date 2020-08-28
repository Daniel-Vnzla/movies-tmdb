import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./CarouselSecondary.css";

import PosterContainer from "../PosterContainer/PosterContainer.js";

const CarouselSecondary = ({ data, title, typeData }) => {
	const [activeButton, setActiveButton] = useState("movies");
	const carouselRef = useRef();

	function moveCarouselRight() {
		carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
	}

	function moveCarouselLeft() {
		carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
	}

	function resetCarouselScroll() {
		if (carouselRef.current) {
			carouselRef.current.scrollLeft = 0;
		}
	}

	function setMoviesOrTvShows() {
		resetCarouselScroll();

		return data[activeButton][typeData].map((data, i) => (
			<PosterContainer
				title={data.title ? data.title : data.name}
				image={data.poster_path}
				ratingValue={data.vote_average}
				id={data.id}
				key={i}
			/>
		));
	}

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
						className={activeButton === "tvShows" ? "item active" : "item"}
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
	data: PropTypes.object.isRequired,
	typeData: PropTypes.string.isRequired,
};

export default CarouselSecondary;
