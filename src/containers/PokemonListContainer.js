import React, { useState, useEffect } from "react";
import PokemonList from "../components/PokemonList";

const PokemonListContainer = () => {
	const [fetchStatus, setFecthStatus] = useState("IDLE");
	const [fetchError, setFetchError] = useState(null);
	const [pokemonList, setPokemonList] = useState([]);

	useEffect(() => {
		setFecthStatus("STARTED");

		fetch(" https://nameless-retreat-88576.herokuapp.com/pokedex")
			.then((response) => response.json())
			.then((data) => {
				setPokemonList(data);
				setFecthStatus("SUCCEDED");
			})
			.catch((err) => {
				setFetchError(err.message);
				setFecthStatus("FAILED");
			})
	}, []);

	return (
		<PokemonList
			fetchStatus={fetchStatus}
			pokemonList={pokemonList}
			fetchError={fetchError}
		/>
	)
}

export default PokemonListContainer;
