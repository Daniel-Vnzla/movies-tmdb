import React from "react";
import PropTypes from "prop-types";

import TitleCard from "./TitleCard.js";
import CompanyCard from "./CompanyCard.js";

const styles = {
	grid: {
		display: "flex",
	},
};

const CompaniesCardContainer = ({ companies }) => {
	return (
		<TitleCard title="Companies">
			<div style={styles.grid}>
				{companies.length > 0 ? (
					companies.map((c) => {
						return (
							<CompanyCard
								key={c.name}
								title={c.name}
								img={`https://image.tmdb.org/t/p/original/${c.logo_path}`}
							/>
						);
					})
				) : (
					<p>Companies Not found</p>
				)}
			</div>
		</TitleCard>
	);
};

CompaniesCardContainer.propTypes = {
	companies: PropTypes.array.isRequired,
};

export default CompaniesCardContainer;
