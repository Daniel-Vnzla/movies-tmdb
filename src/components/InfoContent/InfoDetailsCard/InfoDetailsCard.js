import React from "react";
import PropTypes from "prop-types";
import "./InfoDetailsCard.css";

const InfoDetailsCard = ({ data }) => {
	return (
		<div className="info-card">
			{Object.keys(data).map((key) => {
				return (
					<CardItem
						key={key}
						title={key}
						value={data[key] ? data[key] : "Unknow"}
						link={key === "Homepage"}
					/>
				);
			})}
		</div>
	);
};

const CardItem = ({ title, value, link }) => {
	return (
		<div className="card-item">
			<p className="title">{title}</p>
			{link && (
				<a
					className="value"
					href={value}
					target="_blank"
					rel="noopener noreferrer"
				>
					{value}
				</a>
			)}
			{!link && <p className="value">{value}</p>}
		</div>
	);
};

CardItem.prototype = {
	title: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([
		PropTypes.string.isRequired,
		PropTypes.number.isRequired,
		PropTypes.array.isRequired,
	]),
	link: PropTypes.string.isRequired,
};

InfoDetailsCard.protoType = {
	data: PropTypes.object.isRequired,
};

export default InfoDetailsCard;
