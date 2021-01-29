import styled from 'styled-components';
import device from '../../theme/media';

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin-bottom: 2rem;
	margin-top: 2rem;
	margin-bottom: 1rem;

	p {
		&:first-child {
			font-weight: 700;
			font-size: 1rem;
			text-transform: uppercase;
			color: var(--color-text);
			opacity: 0.5;
			margin-right: 1rem;
			font-family: var(--font-body);
		}

		&:last-child {
			font-size: 1.1rem;
			opacity: 0.7;
			font-family: var(--font-code);
		}
	}
	@media ${device.large} {
		margin-top: 0;
		margin-bottom: 2rem;
	}
`;

const CategoryAndDate = ({ date, category, ...props }) => {
	return (
		<Container {...props}>
			<p>{category} &bull;</p>
			<p>{date}</p>
		</Container>
	);
};

export default CategoryAndDate;
