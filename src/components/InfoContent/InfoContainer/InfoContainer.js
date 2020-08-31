import React from "react";
import "./InfoContainer.css";

import InfoDetailsCard from "../InfoDetailsCard/InfoDetailsCard.js";
import InfoView from "../InfoView/InfoView.js";

const InfoContainer = ({ data }) => {
	return (
		<div className=" info-container container">
			<InfoDetailsCard data={data} />
			<InfoView />
		</div>
	);
};

export default InfoContainer;
