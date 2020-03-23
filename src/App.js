import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header.js';
import CharacterList from './components/CharacterList.js';
import WelcomePage from './components/WelcomePage.js';

export default function App() {
	return (
		<main data-testid="app">
			<Router>
				<Header />
				<Route exact path="/" component={WelcomePage} />
				<Route path="/characters" component={CharacterList} />
			</Router>
		</main>
	);
}
