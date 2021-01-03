import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from '../public/logo.svg';
import SignatureAbdallah from '../public/abdallah.svg';
import { leave, signature } from '../utils/animations';

const Container = styled.div`
	height: 100vh;
	width: 100%;
	position: fixed;
	left: 0;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	animation: ${leave} 0.5s 2.5s;
	.logo {
		height: 5%;
		width: 5%;
		stroke-width: 0.2px;
		fill: none;
		stroke: var(--color-main);
		margin-top: -20rem;

		path {
			animation: ${signature} 2.5s both;
		}
	}
	.signature {
		fill: var(--color-text);
		opacity: 0.3;
		height: 10rem;
		position: absolute;
		bottom: 30%;
		left: 50%;
		transform: translateX(-50%);
	}
	.mask {
		fill: none;
		stroke: #fff;
		stroke-dasharray: 1463.6298828125;
		stroke-dashoffset: 1463.6298828125;
	}
	#mask {
		&-first-a {
			animation: ${signature} 0.5s both;
		}
		&-first-b {
			animation: ${signature} 0.5s 0.4s both;
		}
		&-d {
			animation: ${signature} 0.5s 0.6s both;
		}
		&-second-a {
			animation: ${signature} 0.5s 0.8s both;
		}
		&-first-l {
			animation: ${signature} 0.5s 1s both;
		}
		&-second-l {
			animation: ${signature} 0.5s 1.2s both;
		}
		&-third-a {
			animation: ${signature} 0.5s 1.4s both;
		}
		&-h {
			animation: ${signature} 0.5s 1.6s both;
		}
	}
`;
const Loader = () => {
	useEffect(() => {
		const logoMask = ['base', 'left', 'right'];
		const masks = [
			'first-a',
			'first-b',
			'd',
			'second-a',
			'first-l',
			'second-l',
			'third-a',
			'h',
		];

		logoMask.forEach((mask, index, el) => {
			const id = `.logo .${mask}`;
			let path = document.querySelector(id);
			const length = path.getTotalLength();
			path.style.strokeDasharray = length;
			path.style.strokeDashoffset = length;
		});

		masks.forEach((mask, index, el) => {
			const id = `.signature #mask-${mask}`;
			let path = document.querySelector(id);
			const length = path.getTotalLength();
			path.style.strokeDasharray = length;
			path.style.strokeDashoffset = length;
		});
	});
	return (
		<Container>
			<Logo className='logo' />
			<SignatureAbdallah className='signature' />
		</Container>
	);
};

export default Loader;
