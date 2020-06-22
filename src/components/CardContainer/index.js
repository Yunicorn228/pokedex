import React from 'react';
import Card from '../Card';
import './index.scss';

const CardContainer = ({ pokemonData }) => {
	return (
		<div className='card-container'>
			{pokemonData.map((pokemon) => (
				<Card pokemon={pokemon} />
			))}
		</div>
	);
};

export default CardContainer;
