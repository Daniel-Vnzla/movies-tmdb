import React from "react";
import { useSelector } from "react-redux";

import SlideShow from "../components/SlideShow/SlideShow.js";
import CarouselSecondary from "../components/CarouselSecondary/CarouselSecondary.js";

const Home = () => {
	const apiData = useSelector((data) => data);
	if (apiData.loading) return <p>Loading....</p>;
	const slideShowItems = apiData.movies.topRating.slice(0, 8);
	return (
		<div>
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
