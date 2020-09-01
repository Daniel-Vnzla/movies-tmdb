import React from "react";
import PropTypes from "prop-types";

import InfoDetailsCard from "../InfoDetailsCard/InfoDetailsCard.js";
import InfoMenu from "../InfoMenu/InfoMenu.js";

const styles = {
	infoContainer: {
		display: "grid",
		gridTemplateColumns: "320px 1fr",
		gridGap: "40px",
	},
};

const InfoContainer = ({ data }) => {
	return (
		<div style={styles.infoContainer} className="container">
			<InfoDetailsCard data={data} />
			<InfoMenu />
		</div>
	);
};

InfoContainer.propTypes = {
	data: PropTypes.object.isRequired,
};
export default InfoContainer;
