import React from "react";
import PropTypes from "prop-types";
import "./InfoDetailsCard.css";

const InfoDetailsCard = ({ data }) => {
	console.log(data);
	console.log();
	return (
		<div className="info-card">
			<p className="details">Details</p>
			{Object.keys(data).map((key) => {
				if (key === "Adult") {
					return (
						<CardItem key={key} title={key} value={data[key] ? "Yes" : "No"} />
					);
				} else if (key === "Homepage") {
					return (
						<CardItem key={key} title={key} value={data[key]} link={true} />
					);
				} else {
					return (
						<CardItem
							key={key}
							title={key}
							value={data[key] ? data[key] : "Unknow"}
						/>
					);
				}
			})}
		</div>
	);
};

const CardItem = ({ title, value, link }) => {
	return (
		<div className="card-item">
			<p className="title">{title}</p>
			<p className="value">
				{Array.isArray(value) ? (
					value.reduce((acc, str) => acc + ", " + str.name, "").slice(1)
				) : link ? (
					<a className="value" href={value}>
						{value}
					</a>
				) : (
					value
				)}
			</p>
		</div>
	);
};

InfoDetailsCard.protoType = {
	data: PropTypes.object.isRequired,
};

export default InfoDetailsCard;
