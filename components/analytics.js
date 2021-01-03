import styled from 'styled-components';
import device from '../theme/media';
import { slideInBottom, slideInLeftBlurred } from '../utils/animations';

const Container = styled.div`
	align-self: end;
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 6rem auto 0 auto;

	div {
		padding: 2rem 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--color-primary-lighter);
		border-radius: 5px;

		&:nth-child(1) {
			animation: ${slideInBottom} 0.3s 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;
		}

		&:nth-child(2) {
			animation: ${slideInBottom} 0.3s 1.5s cubic-bezier(0.23, 1, 0.32, 1) both;
		}

		&:nth-child(3) {
			animation: ${slideInBottom} 0.3s 1.8s cubic-bezier(0.23, 1, 0.32, 1) both;
		}

		&:not(:last-child) {
			margin-bottom: 1rem;

			@media ${device.medium} {
				margin-bottom: 0;
				margin-right: 1rem;
			}
		}
		@media ${device.large} {
			&:nth-child(1) {
				animation: ${slideInLeftBlurred} 0.3s 3.4s
					cubic-bezier(0.23, 1, 0.32, 1) both;
			}

			&:nth-child(2) {
				animation: ${slideInLeftBlurred} 0.3s 3.2s
					cubic-bezier(0.23, 1, 0.32, 1) both;
			}

			&:nth-child(3) {
				animation: ${slideInLeftBlurred} 0.3s 3s cubic-bezier(0.23, 1, 0.32, 1)
					both;
			}
		}

		span {
			font-weight: 700;
			font-size: 3rem;
			margin-bottom: 1rem;
			position: relative;
			span {
				font-size: 1.5rem;
				position: absolute;
				top: 50%;
				left: -1.5rem;
				transform: translateY(-50%);
				color: var(--color-text);
			}
		}

		p {
			font-size: 1.3rem;
		}

		@media ${device.medium} {
			width: 33.33333%;
		}

		@media ${device.large} {
			padding: 4rem 0;
		}
	}

	@media ${device.medium} {
		flex-direction: row;
	}
	@media ${device.large} {
		grid-column: 1 / span 2;
		align-self: end;
		margin: 0 auto 2rem auto;
	}
	@media ${device.xLarge} {
		margin: 0 auto 2rem auto;
	}
`;
const Analytics = ({ data }) => {
	return (
		<Container>
			{data.map((info, i) => (
				<div key={i}>
					<span>
						<span>+</span>
						{info?.number}
					</span>
					<p>{info?.of}</p>
				</div>
			))}
		</Container>
	);
};

export default Analytics;
