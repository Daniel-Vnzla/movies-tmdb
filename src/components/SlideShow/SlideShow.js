import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SlideShow.css";

import SlideShowCard from "./SlideShowCard.js";

const SlideShow = ({ data }) => {
	const [style, setStyle] = useState({});
	const [current, setCurrent] = useState(0);

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
				{data.map((movie) => (
					<SlideShowCard key={movie.id} data={movie} />
				))}
			</div>
			<div className="slideshow-btn-container">
				{data.map((_, idx) => (
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

SlideShow.propTypes = {
	data: PropTypes.array.isRequired,
};

export default SlideShow;
