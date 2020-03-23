import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ricknmorty_URL } from '../url';
import CharacterCard from './CharacterCard';

const Grid = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;

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
		<Grid className="character-list">
			{characters.map((character) => <CharacterCard character={character} key={character.id} />)}
		</Grid>
	);
}
