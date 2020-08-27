import React, { useState } from "react";
import "./SlideShow.css";
import { useRedux } from "../../CustomHooks.js";

import SlideShowCard from "./SlideShowCard.js";

const SlideShow = () => {
	const movies = useRedux();
	const [style, setStyle] = useState({});
	const [current, setCurrent] = useState(0);

	const sliceMoviesToShowInSlider = movies.movies.topRating
		.slice(0, 6)
		.map((movie) => <SlideShowCard key={movie.id} data={movie} />);

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
				{sliceMoviesToShowInSlider}
			</div>
			<div className="slideshow-btn-container">
				{sliceMoviesToShowInSlider.map((_, idx) => (
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
