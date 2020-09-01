import React from "react";
import PropTypes from "prop-types";

import TitleCard from "./TitleCard.js";

const VideoCard = ({ video, title }) => {
	return (
		<TitleCard title={title}>
			<iframe
				frameBorder="0"
				title={video}
				className="video"
				src={`https://www.youtube.com/embed/${video}`}
				type="video/mp4"
			/>
		</TitleCard>
	);
};

VideoCard.propTypes = {
	video: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default VideoCard;
