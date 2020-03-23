import React from 'react';
import styled from 'styled-components';

const PageHeader = styled.header`
	font-size: 1.6rem;
  font-weight: 200;
  color: #91592A;
  text-shadow: 1px 3px 3px #3EE6A6;
`;
export default function Header() {
	return (
		<PageHeader className="ui centered">
			<h1 className="ui center">Rick &amp; Morty Fan Page</h1>
		</PageHeader>
	);
}
