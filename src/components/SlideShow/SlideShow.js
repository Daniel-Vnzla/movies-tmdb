import React, { useState } from "react";
import "./SlideShow.css";

const SlideShow = ({ children }) => {
	const [style, setStyle] = useState({});
	const [current, setCurrent] = useState(0);

	const handleButtonChange = (idx) => {
		const newStyle = {
			transform: `translate(-${90 * idx}vw)`,
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
