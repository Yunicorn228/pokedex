import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import CardContainer from './components/CardContainer';
import SearchBar from './components/SearchBar';
import LandingPage from './pages/landing';
import DetailPage from './pages/detail';

function App() {
	return (
		<Router>
			<div className='App'>
				<Banner />
				<Route
					exact
					path='/'
					render={() => {
						return <LandingPage />;
					}}
				/>
				<Route
					exact
					path='/:name'
					render={() => {
						return <DetailPage />;
					}}
				/>
			</div>
		</Router>
	);
}

export default App;
