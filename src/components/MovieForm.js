import React, { useState } from "react";
import { Button, Form, Input, Rating } from "semantic-ui-react";

function MovieForm({ onNewMovie }) {
	const [title, setTitle] = useState("");
	const [rating, setRating] = useState(0);
	return (
		<Form>
			<Form.Field>
				<Input
					value={title}
					placeholder="movie title"
					onChange={(e) => setTitle(e.target.value)}
				/>
			</Form.Field>
			<Form.Field>
				<Rating
					icon="heart"
					rating={rating}
					maxRating={5}
					onRate={(_, data) => {
						setRating(data.rating);
					}}
				/>
			</Form.Field>
			<Form.Field>
				<Button
					primary
					onClick={async () => {
						const movie = { title, rating };

						const response = await fetch("/add_movie", {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify(movie),
						});
						if (response.ok) {
							console.log("Work Movie Uploaded");
							onNewMovie(movie);
							setTitle("");
							setRating(0);
						}
					}}
				>
					Submit
				</Button>
			</Form.Field>
		</Form>
	);
}

export default MovieForm;
