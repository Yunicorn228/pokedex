import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Card = ({ pokemon }) => {
	const handleDetailPage = () => {};

	return (
		<Link to={`/${pokemon.name}`}>
			<div className='pokemon-card' onClick={handleDetailPage}>
				<img src={pokemon.img} alt='pokemon' />
				<h1>{pokemon.name}</h1>
				<div>Number: #{pokemon.num}</div>
				<div>Type:</div>
				<div>
					{' '}
					{pokemon.type.map((type) => (
						<span className={type}>{type}</span>
					))}
				</div>

				<div>Weaknesses:</div>
				<div>
					{pokemon.weaknesses.map((weakness) => (
						<span className={weakness}>{weakness}</span>
					))}
				</div>
			</div>
		</Link>
	);
};

export default Card;
