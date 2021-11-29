import styled from "styled-components";

const H2 = styled.h2`
  color: hsl(210deg, 15%, 90%);
`;

const About:React.FC = () => {
	return (
		<div>
			<H2>About</H2>
		</div>
	);
}

export { About };