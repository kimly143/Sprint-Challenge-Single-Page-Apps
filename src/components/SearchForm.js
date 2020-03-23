import React from 'react';
import styled from 'styled-components';

const Search = styled.div`
	text-align: center;
	margin-bottom: 2vh;
`;
const SearchBox = styled.input`
	margin-left: 2vw;
	width: 15vw;
	padding: 5px;
`;

export default function SearchForm(props) {
	return (
		<Search className="search-form">
			<label htmlFor="search">Search by Name</label>
			<SearchBox
				type="text"
				name="search"
				value={props.query}
				onChange={(event) => {
					props.setQuery(event.target.value);
				}}
			/>
		</Search>
	);
}
