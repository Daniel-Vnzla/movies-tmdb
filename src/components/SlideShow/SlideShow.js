import React, { useState } from "react";
import "./SlideShow.css";

import SlideShowCard from "./SlideShowCard.js";

const SlideShow = ({ children }) => {
	const [style, setStyle] = useState({});
	const [current, setCurrent] = useState(0);

	const active = (idx) => {
		const newStyle = {
			transform: `translate(-${90 * idx}vw)`,
			transition: "300ms transform",
		};
		setCurrent(idx);
		setStyle(newStyle);
	};
	return (
		<div className="slideshow-container">
			<div className="slideshow-items" style={style}>
				{children}
			</div>
			<div className="slideshow-btn-container">
				{children.map((_, idx) => {
					if (current === idx) {
						return (
							<button
								key={idx}
								onClick={() => active(idx)}
								className="slideshow-btn active"
							></button>
						);
					}
					return (
						<button
							key={idx}
							onClick={() => active(idx)}
							className="slideshow-btn"
						></button>
					);
				})}
			</div>
		</div>
	);
};

export default SlideShow;
