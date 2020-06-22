import axios from 'axios';

const url =
	'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

const fetchAllPokemon = () => {
	return axios.get(`${url}`);
};

const pokemonService = {
	fetchAllPokemon,
};

export default pokemonService;
