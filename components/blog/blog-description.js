import styled from 'styled-components';
import device from '../../theme/media';

const Container = styled.p`
	font-family: var(--font-nova);
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 4;
	margin-top: 1rem;
	line-height: 26px;
	font-size: 1.6rem;
	opacity: 0.8;
	overflow-y: hidden;

	@media ${device.large} {
		margin-top: 1.5rem;
		line-height: 30px;
		font-size: 1.8rem;
		-webkit-line-clamp: 5;
	}
`;

const Description = ({ description, ...props }) => {
	return <Container {...props}>{description}</Container>;
};

export default Description;
