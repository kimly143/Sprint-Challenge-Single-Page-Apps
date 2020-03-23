import React from 'react';

// "id": 1,
//       "name": "Rick Sanchez",
//       "status": "Alive",
//       "species": "Human",
//       "type": "",
//       "gender": "Male",
//       "origin": {
//         "name": "Earth (C-137)",
//         "url": "https://rickandmortyapi.com/api/location/1"
//       },
//       "location": {
//         "name": "Earth (Replacement Dimension)",
//         "url": "https://rickandmortyapi.com/api/location/20"
//       },
//       "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//       "episode":
export default function CharacterCard(props) {
	return (
		<div className='card ui'>
			<h2 className="name">Name: {props.character.name}</h2>
			<div className="status">Status: {props.character.status}</div>
			<div className="species">Species: {props.character.species}</div>
			<div className="type">Type: {props.character.type}</div>
			<div className="gender">Gender: {props.character.gender}</div>
			<div className="origin">Origin: {props.character.origin.name}</div>
			{/* <div className="image">{props.character.}</div> */}
		</div>
	);
}
