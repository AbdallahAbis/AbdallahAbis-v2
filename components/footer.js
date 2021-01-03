import styled from 'styled-components';

const Container = styled.div`
	font-family: var(--font-code);
	font-size: 1.2rem;
	position: absolute;
	z-index: 1000;
	bottom: 0px;
	left: 0px;
	display: flex;
	width: 100%;
	height: 6rem;
	color: var(--color-text);
	border-top: 0.5px solid rgba(222, 222, 222, 0.3);
	background: var(--color-primary);
	-moz-box-align: center;
	align-items: center;
	-moz-box-pack: center;
	justify-content: center;
`;

const Footer = () => {
	return (
		<Container>
			<p> © 2020 Abdallah Abis. All rights reserved.</p>
		</Container>
	);
};

export default Footer;
