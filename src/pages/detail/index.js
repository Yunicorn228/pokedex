import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import pokemonService from '../../service/pokemon';
import './index.scss';

const DetailPage = ({ match, history }) => {
	const pokemonName = match.params.name;
	const [pokemonObj, setPokemonObj] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const result = await pokemonService.fetchAllPokemon();
			if (result.status === 200) {
				const newPokemonObj = result.data.pokemon.find(
					(v) => v.name === pokemonName,
				);
				if (newPokemonObj) {
					setPokemonObj(newPokemonObj);
				} else {
					alert('no pokemon found');
				}
			}
		};
		fetchData();
	}, [window.location.href]);

	return (
		<div className='detail-page'>
			<Link to={'/'}>Landing Page</Link>
			<h1>{pokemonObj.name}</h1>
			<div>Number: {pokemonObj.num}</div>
			<div>Height{pokemonObj.height}</div>
			<div>Weight{pokemonObj.weight}</div>
			<div className='pokemon-card-weakness'>
				<div>Weaknesses:</div>
				{pokemonObj.weaknesses &&
					pokemonObj.weaknesses.map((weakness) => <div>{weakness}.</div>)}
			</div>
			<div className='pokemon-card-weakness'>
				<div>Type:</div>
				{pokemonObj.type &&
					pokemonObj.type.map((weakness) => <div>{weakness}.</div>)}
			</div>
			<img src={pokemonObj.img} alt='pokemon' />
			<div>
				{pokemonObj.prev_evolution &&
					pokemonObj.prev_evolution.map((v, i) => (
						<>
							<div>PREV evolution {i + 1}:</div>
							<Link to={`/${v.name}`}>{v.name}</Link>
						</>
					))}
			</div>
			<div>
				{pokemonObj.next_evolution &&
					pokemonObj.next_evolution.map((v, i) => (
						<>
							<div>Next evolution {i + 1}:</div>
							<Link to={`/${v.name}`}>{v.name}</Link>
						</>
					))}
			</div>
		</div>
	);
};

export default withRouter(DetailPage);
