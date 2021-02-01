import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AnimationsContext } from '../../contexts/animationsContext';
import { rollInBottom } from '../../lib/animations';
import CodePen from '../../public/icons/codepen.svg';
import Github from '../../public/icons/github.svg';
import Instagram from '../../public/icons/instagram.svg';
import LinkedIn from '../../public/icons/linkedin.svg';
import Twitter from '../../public/icons/twitter.svg';
import UpWork from '../../public/icons/upwork.svg';
import device from '../../theme/media';

export const SocialContainer = styled.div`
	display: none;
	position: fixed;
	right: 5rem;
	bottom: 20%;
	animation: ${rollInBottom} 0.5s ease-in both;
	animation-delay: ${({ noAnimations }) => (noAnimations ? '.5s' : '3s')};

	&::after {
		content: '';
		position: absolute;
		bottom: -30rem;
		left: 50%;
		width: 0.5px;
		height: 30rem;
		transition: all 0.5s;
		transform: translate(-50%);
		pointer-events: none;
		background: var(--color-text);
		opacity: 0.5;
	}
	&:hover {
		color: var(--color-secondary);
		&::after {
			background: var(--color-text);
		}
	}

	@media ${device.large} {
		display: block;
	}
`;
export const Icon = styled.a`
	display: block;
	width: 1.8rem;
	height: 1.8rem;
	margin-bottom: 3rem;
	cursor: pointer;
	transition: all 0.2s;
	fill: var(--color-text);
	&:hover {
		fill: var(--color-main);
		transform: scale(1.3);
	}
`;

const SVG = ({ name }) =>
	name === 'LinkedIn' ? (
		<LinkedIn />
	) : name === 'CodePen' ? (
		<CodePen />
	) : name === 'Twitter' ? (
		<Twitter />
	) : name === 'Instagram' ? (
		<Instagram />
	) : name === 'upWork' ? (
		<UpWork />
	) : (
		<Github />
	);
const socialMedia = [
	{
		name: 'upWork',
		url: 'https://www.upwork.com/freelancers/~012d12ad79941dfff5',
	},
	{
		name: 'GitHub',
		url: 'https://github.com/AbdallahAbis',
	},
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/abdallah-abis/',
	},
	{
		name: 'CodePen',
		url: 'https://codepen.io/abdallah-abis',
	},
	{
		name: 'Instagram',
		url: 'http://instagram.com/Abis_Abdallah',
	},
	{
		name: 'Twitter',
		url: 'https://twitter.com/Dev_abis',
	},
];

const SocialMedia = (props) => {
	const [noAnimations] = useContext(AnimationsContext);

	useEffect(() => {
		console.log(noAnimations);
	}, [noAnimations]);

	return (
		<SocialContainer noAnimations={noAnimations} {...props}>
			{socialMedia.map(({ name, url }, i) => (
				<Icon
					key={i}
					aria-label={name}
					href={url}
					target='_blank'
					rel='noopener noreferrer'
				>
					<SVG name={name} />
				</Icon>
			))}
		</SocialContainer>
	);
};

export default SocialMedia;
