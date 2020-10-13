import React from "react";
import './InfoContainer.css';

import PropTypes from "prop-types";

import InfoDetailsCard from "../../InfoDetailsCard/InfoDetailsCard.js";
import InfoMenu from "../../InfoMenu/InfoMenu.js";

const InfoContainer = ({ data }) => {
	return (
		<div className="container info-container">
			<InfoDetailsCard data={data} />
			<InfoMenu />
		</div>
	);
};

InfoContainer.propTypes = {
	data: PropTypes.object.isRequired,
};
export default InfoContainer;
