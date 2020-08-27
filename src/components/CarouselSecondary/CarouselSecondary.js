import React, { useRef } from "react";
import PosterContainer from "../ImageContainer/PosterContainer.js";
import "./CarouselSecondary.css";

const CarouselSecondary = ({ data = [] }) => {
	const carousel = useRef();
	const handleMoveCarousel = (direction) => {
		if (direction === "RIGHT") {
			carousel.current.scrollLeft += carousel.current.offsetWidth;
		} else {
			carousel.current.scrollLeft -= carousel.current.offsetWidth;
		}
	};

	return (
		<div className="carousel-wrapper">
			<div className="carousel-menu">
				<h2 className="title">Popular</h2>
				<nav className="options">
					<button className="item active">Movies</button>
					<button className="item">Tv Shows</button>
				</nav>
			</div>
			<div ref={carousel} className="carousel-container">
				{data.map(({ title, poster_path, vote_average }, i) => {
					return (
						<PosterContainer
							title={title}
							image={poster_path}
							ratingValue={vote_average}
							key={i}
						/>
					);
				})}
			</div>

			<button
				onClick={() => handleMoveCarousel("RIGHT")}
				className="arrow-right"
			>
				&#8250;
			</button>
			<button onClick={() => handleMoveCarousel("LEFT")} className="arrow-left">
				&#8249;
			</button>
		</div>
	);
};

export default CarouselSecondary;