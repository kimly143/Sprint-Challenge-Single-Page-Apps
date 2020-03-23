import React from 'react';

export default function SearchForm(props) {
	return (
		<section className="search-form">
			<label htmlFor="search">Search by Name</label>
			<input
				type="text"
				name="search"
				value={props.query}
				onChange={(event) => {
					props.setQuery(event.target.value);
				}}
			/>
		</section>
	);
}
