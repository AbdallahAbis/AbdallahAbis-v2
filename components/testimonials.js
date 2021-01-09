import { useEffect } from 'react';
import styled from 'styled-components';
import Icon from '../public/icons/arrow.svg';
import OpenQuote from '../public/icons/quote.svg';
import Star from '../public/icons/star.svg';
import Upwork from '../public/icons/upwork.svg';
import device from '../theme/media';
import { slideInBottom } from '../lib/animations';
import carousel from '../lib/carousel';
import Headline from './custom/headline';

// Styles Start
const Container = styled.section`
	min-height: auto;
	@media ${device.large} {
		margin-top: 15rem;
	}
`;
const Title = styled(Headline)`
	&.animate {
		animation: ${slideInBottom} var(--animation-duration)
			cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}
	@media ${device.large} {
		justify-content: center;
	}
`;
const OuterContainer = styled.div`
	overflow: hidden;
	width: 100%;
	min-width: 310px;
	max-width: 500px;
	padding-bottom: 2.5rem;
	padding-top: 1rem;
	margin: 0 auto;

	&.animate {
		animation: ${slideInBottom} var(--animation-duration)
			cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	@media ${device.large} {
		min-width: 700px;
		max-width: 700px;
	}
`;
const InnerContainer = styled.div`
	display: flex;
	flex-wrap: nowrap;
	transition: transform 0.5s ease;
`;
const Testimonial = styled.div`
	flex-shrink: initial;

	width: 100%;
	min-width: 100%;
	max-width: 500px;
	min-height: 18rem;
	border: 2px solid var(--color-primary-diff-2);
	background-color: rgba(var(--color-primary-diff-3-alpha), 0.4);
	margin: 0 auto;
	padding: 4rem 3rem;
	border-radius: 5px;

	font-family: var(--font-circular);
	line-height: 20px;
	font-size: 1.6rem;
	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media ${device.large} {
		min-width: 700px;
		max-width: 700px;
	}

	&:not(:last-child) {
		margin-right: 1rem;
	}

	svg {
		height: 2rem;
	}

	span {
		position: absolute;
		right: 2rem;
		bottom: 0.5rem;
		font-size: 1rem;
		width: max-content;
	}
	.quoteOpen,
	.quoteClose {
		opacity: 0.4;
		fill: var(--color-text);
	}

	.quoteOpen {
		align-self: flex-start;
		margin-bottom: 1rem;
		margin-left: -1rem;
	}

	.quoteClose {
		align-self: flex-end;
		transform: rotate(180deg);
		margin-right: -1rem;
	}
`;
const Stars = styled.div`
	height: 5rem;
	width: 5rem;
	background-color: var(--color-primary);
	border-radius: 50%;
	border-bottom: 2px solid var(--color-primary-diff-2);

	display: flex;
	justify-content: center;
	align-items: center;

	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, -50%);

	svg {
		fill: var(--color-main);
		width: 50%;
		height: 50%;
	}

	span {
		position: absolute;
		top: 50%;
		left: 50%;

		color: var(--color-primary);
		font-weight: 700;
		transform: translate(-50%, -50%);
	}
`;
const Image = styled.div`
	height: 5rem;
	width: 5rem;
	background-color: var(--color-primary);
	border-radius: 50%;
	border: 2px solid var(--color-primary-diff-2);

	display: flex;
	justify-content: center;
	align-items: center;

	position: absolute;
	bottom: 0;
	transform: translateY(50%);

	svg {
		margin-bottom: unset;
		fill: var(--color-main);
	}
`;
const ScrollButtons = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-top: 2rem;

	&.animate {
		animation: ${slideInBottom} var(--animation-duration)
			cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}
	span {
		cursor: pointer;
		width: 4rem;
		height: 4rem;
		background-color: var(--color-primary-diff-3);
		border-radius: 5px;

		display: flex;
		justify-content: center;
		align-items: center;

		svg {
			width: 50%;
			height: 50%;
			fill: var(--color-text);
			opacity: 0.5;
		}

		&.testimonials-prev {
			transform: rotate(-180deg);
		}
	}
`;
// Styles End

const Testimonials = ({ data: { testimonials } }) => {
	useEffect(() => {
		carousel({
			container: '#testimonials-slides',
			slides: '.testimonial-slide',
			prev: '.testimonials-prev',
			next: '.testimonials-next',
		});
	}, []);
	return (
		<Container id='testimonials'>
			<Title data-animate>What Clients Say.</Title>
			<OuterContainer data-animate>
				<InnerContainer id='testimonials-slides'>
					{testimonials.map(({ testimonial, client, stars }, i) => (
						<Testimonial key={i} className='testimonial-slide'>
							<Stars>
								<Star></Star>
								<span>{stars}</span>
							</Stars>
							<OpenQuote className='quoteOpen' />
							<q>{testimonial}</q>
							<OpenQuote className='quoteClose' />

							<Image>
								<Upwork />
							</Image>

							<span>{client}</span>
						</Testimonial>
					))}
				</InnerContainer>
				<ScrollButtons data-animate>
					<span className='testimonials-prev'>
						<Icon />
					</span>
					<span className='testimonials-next'>
						<Icon />
					</span>
				</ScrollButtons>
			</OuterContainer>
		</Container>
	);
};

export default Testimonials;
