import React from "react";

const PokemonList = (props) => {
	const { fetchStatus, pokemonList, fetchError } = props;

	if (fetchStatus === "IDLE" || fetchStatus === "STARTED") {
		return <div>Loading ...</div>;
	}

	if (fetchStatus === "SUCCEDED") {
		return (
			<div>
				<pre>
					{pokemonList.map((pokemon) => (
						<div>{pokemon.name.english}</div>
					))}
				</pre>
			</div>
		);
	}

	return (
		<div>
			Sorry... couldn't fetch data !
            <pre>
                {fetchError}
            </pre>
		</div>
	);
};

export default PokemonList;
