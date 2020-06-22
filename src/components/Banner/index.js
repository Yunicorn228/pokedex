import React from 'react';
import logo from '../../asset/International_Pokémon_logo.svg';
import './index.scss';

const Banner = () => {
	return (
		<div className='banner'>
			<img src={logo} alt='pokemon logo' />
		</div>
	);
};

export default Banner;
