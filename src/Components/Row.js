import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import "../assets/Row.css";
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");

	// A snippet of code which runs based on specific condition,

	useEffect(() => {
		async function fetchdata() {
			const request = await axios.get(fetchUrl);
			console.log(request.data.results);
			setMovies(request.data.results);
			return request;
		}
		fetchdata();
	}, [fetchUrl]);

	function fetchVideoLink(videoId) {
		const url = `https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=0501b4ae8587ab7d28d999e6535290b5`;
		axios
			.get(url)
			.then((res) => {
				if (res.data.results.length !== 0)
					console.log(res.data.results[0]?.key);
				setTrailerUrl(res.data.results[0]?.key);
			})
			.then((movieKey) => movieKey);
	}

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			fetchVideoLink(movie.id);
		}
	};

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};

	console.table(movies);
	// Pro tip always use console.table you'll be suprised by the output in console menu....Thank me later

	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row_posters">
				{movies.map((movie) => (
					<img
						key={movie.id}
						onClick={() => handleClick(movie)}
						className={`row_poster ${isLargeRow && "row_posterLarge"}`}
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
		</div>
	);
}

export default Row;
