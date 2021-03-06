import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import MovieForm from "./components/MovieForm";
import Movies from "./components/Movies";

function App() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchMovies = () => {
			fetch("/movies").then((response) =>
				response.json().then((data) => {
					console.log(data.movies);
					setMovies(data.movies);
				})
			);
		};
		fetchMovies();
	}, []);

	return (
		<div>
			<Container style={{ marginTop: 40 }}>
				<MovieForm
					onNewMovie={(movie) =>
						setMovies((currentMovies) => [movie, ...currentMovies])
					}
				/>
				<Movies movies={movies} />
			</Container>
		</div>
	);
}

export default App;
