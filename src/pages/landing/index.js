import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar';
import CardContainer from '../../components/CardContainer';
import pokemonService from '../../service/pokemon';
import './index.scss';

const LandingPage = () => {
	const [pokemonData, setPokemonData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await pokemonService.fetchAllPokemon();
			if (result.status === 200) {
				setPokemonData(result.data.pokemon);
			}
		};
		fetchData();
	}, []);

	return (
		<div className='landing-page'>
			<SearchBar pokemonData={pokemonData} setPokemonData={setPokemonData} />
			<CardContainer pokemonData={pokemonData} />
		</div>
	);
};

export default LandingPage;
