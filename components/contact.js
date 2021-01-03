import styled from 'styled-components';
import device from '../theme/media';
import { scaleUp } from '../utils/animations';
import CustomButton from './custom/button';
import Headline from './custom/headline';

const Container = styled.section`
	margin: 0 auto;
	margin-top: 10rem;
	max-width: 700px;
	text-align: center;
	min-height: 70vh;
	margin-bottom: 15rem;

	&.animate {
		animation: ${scaleUp} var(--animation-duration) 0.5s
			cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	p {
		font-family: var(--font-circular);
		line-height: 25px;
		font-size: 1.6rem;
		max-width: 500px;
		margin: 0 auto;
		margin-top: 5rem;
		margin-bottom: 5rem;
	}
`;
const Title = styled(Headline)`
	font-size: 4rem;
	margin-bottom: 0;

	@media ${device.large} {
		font-size: 5rem;
	}
	@media ${device.large} {
		justify-content: center;
	}
`;
const SubTitle = styled.h2`
	font-size: 1.2rem;
	font-family: var(--font-code);
	color: var(--color-main);
	opacity: 0.7;
`;
const Button = styled(CustomButton)`
	padding: 2rem 5rem;
	margin: 0 auto;

	&:hover {
		background-color: var(--color-text);
	}
	&:not(:last-child) {
		display: block;
		margin-bottom: 2rem;
	}
`;
const Contact = ({ data: { subtitle, paragraph, contact } }) => {
	return (
		<Container data-animate id='contact'>
			<Title>Get In Touch!</Title>
			<SubTitle>{subtitle}</SubTitle>

			<p>{paragraph}</p>

			{contact?.map((contactWay, i) => (
				<Button key={i} href={contactWay?.link}>
					{contactWay?.text}
				</Button>
			))}
		</Container>
	);
};

export default Contact;
