import React from 'react';
import styled from 'styled-components';
import device from '../theme/media';
import {
	bubblesBottom,
	bubblesTop,
	slideInBottom,
	tiltInBottomRight,
} from '../lib/animations';
import Analytics from './analytics';
import CustomButton from './custom/button';
import Headline from './custom/headline';
import Paragraph from './custom/paragraph';
import Computer from './inner-components/computer';

// Styles Start
const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - var(--nav));
`;
const InnerContainer = styled.div`
	height: 100%;
	padding-top: 5rem;
	@media ${device.medium} {
		max-width: 62rem;
	}
	@media ${device.large} {
		display: grid;
		grid-template-columns: fit-content(59rem) 1fr;
		grid-row-gap: 3rem;
		max-width: 1025px;
	}
	@media ${device.xLarge} {
		grid-template-columns: 1fr 1fr;
		max-width: 1280px;
		min-height: calc(100vh - var(--nav));
		padding-top: 5rem;
	}
	@media ${device.xxLarge} {
		max-width: 1441px;
	}
	@media ${device.huge} {
		max-width: 1921px;
	}
`;
const ContentContainer = styled.div`
	@media ${device.large} {
		grid-column: 1;
		margin-top: 8rem;
	}
`;
const Title = styled(Headline)`
	animation: ${slideInBottom} 0.5s 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
		both;

	@media ${device.large} {
		animation-delay: 2.7s;
		width: 85%;
	}
`;
const Description = styled(Paragraph)`
	animation: ${slideInBottom} 0.5s 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
		both;
	font-family: var(--font-body);
	margin: 0 auto 6rem;

	@media ${device.large} {
		animation-delay: 3s;
		margin-left: 0;
	}
`;
const ComputerContainer = styled.div`
	display: none;

	@media ${device.large} {
		display: block;
		animation: ${tiltInBottomRight} 0.4s 3.3s
			cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}
`;
const Button = styled(CustomButton)`
	padding: 2rem 2.5rem;
	font-size: 1.5rem;
	line-height: 0.8;
	letter-spacing: 0.5px;
	text-transform: uppercase;
	animation: ${slideInBottom} 0.5s 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)
		both;

	@media (hover: hover) {
		overflow: visible;

		.before,
		.after {
			position: absolute;
			display: block;
			width: 140%;
			height: 100%;
			left: -20%;
			z-index: -1000;
			transition: all ease-in-out 0.5s;
			background-repeat: no-repeat;
		}

		.before {
			display: none;
			top: -75%;
			background-image: radial-gradient(
					circle,
					var(--color-main-darker) 20%,
					transparent 20%
				),
				radial-gradient(
					circle,
					transparent 20%,
					var(--color-main-darker) 20%,
					transparent 30%
				),
				radial-gradient(circle, var(--color-main-darker) 20%, transparent 20%),
				radial-gradient(circle, var(--color-main-darker) 20%, transparent 20%),
				radial-gradient(
					circle,
					transparent 10%,
					var(--color-main-darker) 15%,
					transparent 20%
				),
				radial-gradient(circle, var(--color-main-darker) 20%, transparent 20%),
				radial-gradient(circle, var(--color-main-darker) 20%, transparent 20%),
				radial-gradient(circle, var(--color-main-darker) 20%, transparent 20%),
				radial-gradient(circle, var(--color-main-darker) 20%, transparent 20%);
			background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%,
				15% 15%, 10% 10%, 18% 18%;
		}
		.after {
			display: none;
			bottom: -75%;
			background-image: radial-gradient(
					circle,
					var(--color-main-darker) 20%,
					transparent 20%
				),
				radial-gradient(circle, var(--color-main-darker) 20%, transparent 20%),
				radial-gradient(
					circle,
					transparent 10%,
					var(--color-main-darker) 15%,
					transparent 20%
				),
				radial-gradient(circle, var(--color-main-darker) 20%, transparent 20%),
				radial-gradient(circle, var(--color-main-darker) 20%, transparent 20%),
				radial-gradient(circle, var(--color-main-darker) 20%, transparent 20%),
				radial-gradient(circle, var(--color-main-darker) 20%, transparent 20%);
			background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%,
				20% 20%;
		}

		&:before {
			display: none;
			animation: none;
		}

		.before:hover,
		.after:hover {
			height: 0px;
		}
		&:hover {
			background-color: var(--color-main-darker);
			&:after {
				animation: none;
				transform: none;
			}
			.before,
			.after {
				display: block;
				cursor: default;
			}
			.before {
				animation: ${bubblesTop} ease-in-out 0.75s forwards;
			}
			.after {
				animation: ${bubblesBottom} ease-in-out 0.75s forwards;
			}
		}
	}
	@media ${device.large} {
		margin: 0;
		animation-delay: 3.3s;
	}
`;
// Styles End

const Header = ({ data: { headline, paragraph, button, analytics } }) => {
	return (
		<Container id='home'>
			<InnerContainer>
				<ContentContainer>
					<Title aria-label={headline}>{headline}</Title>
					<Description>{paragraph}</Description>
					<Button href='/#testimonials'>
						<span className='before'></span> {button}
						<span className='after'></span>
					</Button>
				</ContentContainer>
				<ComputerContainer>
					<Computer />
				</ComputerContainer>
				<Analytics data={analytics} />
			</InnerContainer>
		</Container>
	);
};

export default Header;
