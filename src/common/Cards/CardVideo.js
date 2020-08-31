import React from "react";
import CardTitle from "./CardTitle.js";

const CardVideo = ({ video }) => {
	return (
		<CardTitle title="Trailer">
			<iframe
				className="video"
				src={`https://www.youtube.com/embed/${video}`}
				type="video/mp4"
			/>
		</CardTitle>
	);
};

export default CardVideo;
