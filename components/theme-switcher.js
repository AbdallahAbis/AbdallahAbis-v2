// Credit https://codepen.io/minimaluminium/pen/xMvVvK

import { useEffect, useState, createContext } from 'react';
import styled from 'styled-components';
import { rollInRight, slideInTop } from '../lib/animations';
import device from '../theme/media';

const Container = styled.div`
	background-color: #1a1a1a;
	border-radius: 30px;
	cursor: pointer;
	display: flex;
	height: 24px;
	position: relative;
	user-select: none;
	width: 50px;
	border: 1px solid var(--color-text);
	box-sizing: content-box;

	position: absolute;
	left: 41%;
	top: 33%;
	animation: ${slideInTop} 0.5s 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

	@media ${device.medium} {
		left: 46%;
	}
	@media ${device.large} {
		right: 0;
		left: unset;
		transform: translateY(-50%);
		top: 32.5%;

		animation: ${rollInRight} 0.4s 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}
	.toggle-sun,
	.toggle-moon {
		align-items: center;
		display: flex;
		font-size: 12px;
		padding: 0 4px;
		width: 50%;
	}

	.toggle-moon {
		justify-content: flex-end;
	}

	.toggle-thumb {
		background-color: #fff;
		border-radius: 50%;
		height: 20px;
		left: 2px;
		position: absolute;
		top: 2px;
		transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
		width: 20px;
	}

	&.true {
		.toggle-thumb {
			transform: translateX(26px);
		}
	}
`;
const ThemeSwitcher = ({ isLight, setIsLight }) => {
	const handleToggle = () => {
		setIsLight(!isLight);
	};

	useEffect(() => {
		const root = window.document.documentElement;
		const initialColorValue = root.style.getPropertyValue(
			'--initial-color-mode'
		);
		setIsLight(initialColorValue === 'light');
	}, []);

	useEffect(() => {
		if (isLight !== null) {
			if (isLight) {
				document.documentElement.setAttribute('data-theme', 'light');
				window.localStorage.setItem('theme', 'light');
			} else {
				document.documentElement.removeAttribute('data-theme');
				window.localStorage.setItem('theme', 'dark');
			}
		}
	}, [isLight]);

	return (
		<Container onClick={handleToggle} className={`toggle-track ${isLight}`}>
			<div className='toggle-moon'>🌛</div>
			<div className='toggle-sun'>☀️</div>
			<div className='toggle-thumb'></div>
		</Container>
	);
};

export default ThemeSwitcher;
