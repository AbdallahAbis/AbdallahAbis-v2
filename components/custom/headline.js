import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import device from '../../theme/media';
import { squeeze } from '../../utils/animations';

const Container = styled.h1`
	line-height: 1.32;
	font-size: 3.2rem;
	margin-bottom: 3rem;
	position: relative;
	font-family: var(--font-body);
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-bottom: 4rem;

	@media (hover: hover) {
		span {
			display: inline-block;
			span {
				display: inline-block;
				height: 0px;
				line-height: 0px;
				cursor: default;

				@media ${device.medium} {
					height: 56px;
					line-height: 56px;
				}

				&:hover span {
					display: inline-block;
					color: var(--color-main);
					animation: ${squeeze} 0.4s;
					transition: color 0.3s;
				}

				span {
					display: inline-block;
					z-index: -10;
					@media ${device.medium} {
						height: 57px;
						line-height: 57px;
					}
				}
			}
		}
	}

	& span:last-child {
		span:last-child {
			span:last-child {
				animation: unset;
				color: var(--color-main);
			}
		}
	}
	@media ${device.xSmall} {
		font-size: 2.5rem;
		margin-bottom: 2rem;
	}

	@media ${device.medium} {
		font-size: 5rem;
		margin-bottom: 4rem;
	}
	@media ${device.large} {
		font-size: 5.5rem;
		line-height: 6.2rem;
		justify-content: flex-start;
	}
`;

const Headline = ({ children = 'No Text.', ...props }) => {
	const words = children.split(' ');

	return (
		<Container {...props}>
			{words.map((word, i) => (
				<span key={i}>
					{word.split('').map((char, i) => (
						<span key={i}>
							<span>{char}</span>
						</span>
					))}
					&nbsp;
				</span>
			))}
		</Container>
	);
};

export default Headline;
