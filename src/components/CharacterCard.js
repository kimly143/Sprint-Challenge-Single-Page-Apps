import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
	margin: 1.25rem;
	border: thin solid gray;
	padding: 2vh 2vw;
	width: 25vw;
	text-align: center;
	background-image: url(${(props) => props.image});
	background-position: center;
	background-size: cover;
`;

const Text = styled.div`
	background-color: #00000080;
	padding: 5px;
	color: white;
	text-shadow: 1px 1px 0px black;
`;

const Name = styled.h2`color: #A9D3E9;`;

export default function CharacterCard(props) {
	return (
		<Card image={props.character.image}>
			<Text>
				<Name className="name">{props.character.name}</Name>
				<div className="status">Status: {props.character.status}</div>
				<div className="species">Species: {props.character.species}</div>
				<div className="type">Type: {props.character.type}</div>
				<div className="gender">Gender: {props.character.gender}</div>
				<div className="origin">Origin: {props.character.origin.name}</div>
			</Text>
		</Card>
	);
}
