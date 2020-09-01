import React from "react";
import "./InfoContainer.css";

import InfoDetailsCard from "../InfoDetailsCard/InfoDetailsCard.js";
import InfoMenu from "../InfoMenu/InfoMenu.js";

const InfoContainer = ({ data }) => {
	return (
		<div className=" info-container container">
			<InfoDetailsCard data={data} />
			<InfoMenu />
		</div>
	);
};

export default InfoContainer;
