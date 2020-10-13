import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";
import SearchCard from "../../common/Cards/SearchCard/SearchCard.js";
import Loading from "../Loading/Loading.js";

const Search = (props) => {
	const [list, setList] = useState([]);
	const [query, setQuery] = useState("");
	const [active, setActive] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const source = axios.CancelToken.source();
		const fetchApi = async () => {
			setLoading(true);
			try {
				const { data } = await axios.get(
					`https://api.themoviedb.org/3/search/multi?api_key=74d44b9fc3530ad0da458c3a01816d5c&language=en-US&query=${query}%20&page=1&include_adult=false`,
					{
						cancelToken: source.token,
					}
				);
				const filterPersons = data.results.filter(
					({ media_type }) => media_type !== "person"
				);
				console.log(filterPersons)
				setList(filterPersons);
				setLoading(false);
			} catch (err) {
				if (axios.isCancel(err)) {
					console.log("Request canceled");
				} else {
					setLoading(false);
					console.log(err);
				}
			}
		};
		fetchApi();
		return () => {
			setList([]);
			source.cancel();
		};
	}, [query]);

	const handleInput = ({ target }) => {
		const queryLength = target.value.length;
		if (queryLength >= 2) setQuery(target.value);
	};

	function renderSearchCards() {
		return list.map((program) => (
			<div key={program.id} onClick={() => setActive(false)}>
				<SearchCard
					id={program.id}
					title={program.title ? program.title : program.name}
					img={program.poster_path}
					date={
						program.release_date ? program.release_date : program.first_air_date
					}
					type={program.media_type}
					overview={program.overview}
					ratingValue={program.vote_average}
				/>
			</div>
		));
	}

	return (
		<div className="search">
			<div
				hidden={!active}
				className="close-input"
				onClick={() => setActive(false)}
			></div>
			<div className="search-container">
				<input
					onClick={() => setActive(true)}
					onChange={handleInput}
					type="text"
					placeholder="Search..."
				/>
				{active && (
					<div className="data-list">
						{list.length > 0 && renderSearchCards()}
						<div className="data-footer">
							{loading && (
								<Loading
									radius={32}
									border={2}
									color="var(--text-color-secondary)"
								/>
							)}
							{query.length < 2 && (
								<p className="query-message">Write 2 characteres</p>
							)}
							{query && !loading && list.length > 0 && (
								<p>Related results: {list.length}</p>
							)}
							{query && !loading && list.length === 0 && <p>Not Results</p>}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Search;
