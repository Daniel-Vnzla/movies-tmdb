import React, { useState, useEffect } from "react";
import "./SlideShow.css";

const SlideShow = ({ children }) => {
	const [style, setStyle] = useState({});
	const [current, setCurrent] = useState(0);

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

	const buttonSlider = children.map((_, idx) => (
		<button
			key={idx}
			onClick={() => handleButtonChange(idx)}
			className={current === idx ? "slideshow-btn active" : "slideshow-btn"}
		></button>
	));

	return (
		<div className="slideshow-container">
			<div className="slideshow-items" style={style}>
				{children}
			</div>
			<div className="slideshow-btn-container">{buttonSlider}</div>
		</div>
	);
};

export default SlideShow;
