import React from "react";
import TitleCard from "./TitleCard.js";
import CompanyCard from "./CompanyCard.js";

const styles = {
	grid: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
	},
};

const CompaniesCardContainer = ({ data }) => {
	return (
		<TitleCard title="Companies">
			<div style={styles.grid}>
				{data.map((c) => {
					return (
						<CompanyCard
							key={c.name}
							title={c.name}
							img={`https://image.tmdb.org/t/p/original/${c.logo_path}`}
						/>
					);
				})}
			</div>
		</TitleCard>
	);
};

export default CompaniesCardContainer;
