import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ricknmorty_URL } from '../url';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
	const [ characters, setCharacters ] = useState([]);

	useEffect(() => {
		axios
			.get(ricknmorty_URL)
			.then((response) => {
				setCharacters(response.data.results);
				console.log(response.data);
			})
			.catch((error) => {
				console.error('Server Error', error);
			});
	}, []);

	return (
		<section className="character-list grid-view">
			{characters.map((character) => <CharacterCard character={character} key={character.id} />)}
		</section>
	);
}
