import React, { useState } from 'react';
import './index.scss';
import FilterTable from '../FilterTable';
import pokemonService from '../../service/pokemon';

const SearchBar = ({ pokemonData, setPokemonData }) => {
	const [pokemonName, setPokemonName] = useState('');

	const handleChangeName = (e) => {
		setPokemonName(e.target.value);
	};

	const handleFindPokemon = async () => {
		const reset = await pokemonService.fetchAllPokemon();
		const result = reset.data.pokemon;

		const newPokemonData = result.find(
			(pokemon) => pokemon.name.toLowerCase() === pokemonName.toLowerCase(),
		);
		if (newPokemonData) {
			setPokemonData([newPokemonData]);
			setPokemonName('');
		} else {
			alert('no pokemon found');
			setPokemonName('');
		}
	};

	return (
		<div className='search-bar'>
			<div className='search-bar-name'>
				<input
					type='text'
					onChange={handleChangeName}
					value={pokemonName}
					placeholder='type the name'
				/>
				<button onClick={handleFindPokemon}>Find Your Pokemon</button>
			</div>
			<FilterTable pokemonData={pokemonData} setPokemonData={setPokemonData} />
		</div>
	);
};

export default SearchBar;
