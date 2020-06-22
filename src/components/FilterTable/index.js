import React, { useState } from 'react';
import types from '../../constants/pokemonTypes';
import './index.scss';
import pokemonService from '../../service/pokemon';

const FilterTable = ({ pokemonData, setPokemonData }) => {
	const [filterData, setFilterData] = useState([]);

	const handleChangeData = (e) => {
		const newData = e.target.value;

		setFilterData((prevData) => {
			if (prevData.includes(newData)) {
				const result = prevData.filter((data) => data !== newData);
				return [...result];
			} else {
				return [...prevData, newData];
			}
		});
	};

	const handleSubmitFilter = async (condition) => {
		const reset = await pokemonService.fetchAllPokemon();
		const result = reset.data.pokemon;

		const newPokemonData = [];
		result.forEach((pokemon) => {
			if (condition === 'weaknesses') {
				if (filterData.every((v) => pokemon.weaknesses.includes(v))) {
					newPokemonData.push(pokemon);
				}
			} else if (condition === 'type') {
				if (filterData.every((v) => pokemon.type.includes(v))) {
					newPokemonData.push(pokemon);
				}
			}
		});
		if (newPokemonData.length === 0) {
			alert(`no pokemon found`);
		} else {
			setPokemonData(newPokemonData);
		}
	};

	return (
		<div className='search-bar-type'>
			<div className='search-bar-type-checkbox'>
				{types.map((type) => (
					<label>
						<input type='checkbox' onClick={handleChangeData} value={type} />
						{type}
					</label>
				))}
			</div>
			<button onClick={() => handleSubmitFilter('weaknesses')}>
				Filter By Weaknesses
			</button>
			<button onClick={() => handleSubmitFilter('type')}>Filter By Type</button>
		</div>
	);
};

export default FilterTable;
