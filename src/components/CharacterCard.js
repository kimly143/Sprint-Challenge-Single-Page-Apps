import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
	margin: 1.25rem;
	border: thin solid gray;
	padding: 0 2vw 2vh 2vw;
	width: 25vw;
	text-align: center;
`;

export default function CharacterCard(props) {
	return (
		<Card>
			<h2 className="name">Name: {props.character.name}</h2>
			<div className="status">Status: {props.character.status}</div>
			<div className="species">Species: {props.character.species}</div>
			<div className="type">Type: {props.character.type}</div>
			<div className="gender">Gender: {props.character.gender}</div>
			<div className="origin">Origin: {props.character.origin.name}</div>
			{/* <div className="image">{props.character.}</div> */}
		</Card>
	);
}
