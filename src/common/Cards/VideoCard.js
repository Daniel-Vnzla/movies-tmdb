import React from "react";
import TitleCard from "./TitleCard.js";

const styles = {
	title: {
		fontSize: "1.2rem",
		color: "var(--secondary)",
		textAlign: "left",
	},
};

const CardVideo = ({ video }) => {
	return (
		<TitleCard title="Trailer">
			<iframe
				className="video"
				src={`https://www.youtube.com/embed/${video}`}
				type="video/mp4"
			/>
		</TitleCard>
	);
};

export default CardVideo;
