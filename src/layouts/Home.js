import React from "react";
import { useSelector } from "react-redux";

import SlideShow from "../components/SlideShow/SlideShow.js";
import CarouselSecondary from "../components/CarouselSecondary/CarouselSecondary.js";
import Loading from "../components/Loading/Loading.js";

const styles = {
	loadingContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	loading: {
		width: "250px",
		height: "250px",
	},
};

const Home = () => {
	const apiData = useSelector((data) => data);
	if (apiData.loading) {
		return (
			<div style={styles.loadingContainer}>
				<div style={styles.loading}>
					<Loading />
				</div>
			</div>
		);
	}

	const slideShowItems = apiData.movies.topRating.slice(0, 8);
	return (
		<div className="container">
			<SlideShow data={slideShowItems} />
			<CarouselSecondary title="Popular" data={apiData} typeData="popular" />
			<CarouselSecondary
				title="Now Playing"
				data={apiData}
				typeData="nowPlaying"
			/>
			<CarouselSecondary title="Upcoming" data={apiData} typeData="upcoming" />
		</div>
	);
};

export default Home;
