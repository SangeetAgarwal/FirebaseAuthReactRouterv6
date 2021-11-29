import styled from "styled-components";

const H2 = styled.h2`
  color: hsl(210deg, 15%, 90%);
`;

const Home: React.FC = () => {
	return (
		<div>
			<H2>Home</H2>
		</div>
	);
}

export { Home };