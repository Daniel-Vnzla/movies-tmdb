import React, { useState, useEffect } from "react";
import "./SlideShow.css";
import { useFetch } from "../../CustomHooks.js";

import SlideShowCard from "./SlideShowCard.js";

const SlideShow = () => {
	const movies = useFetch();
	const [style, setStyle] = useState({});
	const [current, setCurrent] = useState(0);

	const moviesSlideShow = movies.topRating.slice(0, 6);
	const moveSliderAuto = () => {
		let state = 0;
		setInterval(() => {
			if (state >= 5) state = 0;
			setCurrent(state++);
			handleButtonChange(state);
		}, 15000);
	};

	useEffect(() => {
		moveSliderAuto();
		return () => clearInterval(moveSliderAuto());
	}, []);

	const handleButtonChange = (idx) => {
		const newStyle = {
			transform: `translate(-${100 * idx}%)`,
			transition: "300ms transform",
		};
		setCurrent(idx);
		setStyle(newStyle);
	};

	return (
		<div className="slideshow-container">
			<div className="slideshow-items" style={style}>
				{moviesSlideShow.map((movie) => (
					<SlideShowCard key={movie.id} data={movie} />
				))}
			</div>
			<div className="slideshow-btn-container">
				{moviesSlideShow.map((_, idx) => (
					<button
						key={idx}
						onClick={() => handleButtonChange(idx)}
						className={
							current === idx ? "slideshow-btn active" : "slideshow-btn"
						}
					></button>
				))}
			</div>
		</div>
	);
};

export default SlideShow;
