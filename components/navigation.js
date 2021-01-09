import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rollInLeft } from '../lib/animations';
import HamburgerMenu from './inner-components/hamburgerMenu';
import { useRouter } from 'next/router';
import NavOptions from './inner-components/nav-options';
import Logo from '../public/brand/logo.svg';
import device from '../theme/media';
import Head from 'next/head';
import ThemeSwitcher from './theme-switcher';

const Container = styled.nav`
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	transition: 0.2s;
	width: 100%;

	&.show {
		box-shadow: ${({ isLight }) =>
			!isLight
				? '0 1px 7px 6px rgba(0, 0, 0, 0.9)'
				: '0 3px 5px rgba(57, 63, 72, 0.3)'};
	}
	&.hide {
		transform: translateY(-100%);
	}
	.innerContainer {
		height: var(--nav);
		background-color: var(--color-primary);
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		z-index: 5;

		@media ${device.large} {
			padding-right: 15rem;
		}
	}
`;

const LogoContainer = styled.a`
	height: 3rem;
	width: 3rem;
	z-index: 10;
	animation: ${rollInLeft} 0.6s ease-out both;
	cursor: pointer;

	svg {
		fill: var(--color-main);
		height: 100%;
		width: 100%;
		&:hover {
			fill: var(--color-main-lighter);
		}
	}
`;

const Navigation = ({ data, isLight, setIsLight }) => {
	// if the Hamburger Menu is either Opened or not
	const [hamburgerMenuActiveStatus, setHamburgerMenuActiveStatus] = useState(
		false
	);

	// this className is responsible for showing/hiding the navBar when scrolling

	//
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visibleNav, setVisibleNav] = useState('');

	const handleScroll = () => {
		// find current scroll position
		const currentScrollPos = window.pageYOffset;

		// set state based on location info (explained in more detail below)
		currentScrollPos > 80 && currentScrollPos > prevScrollPos
			? setVisibleNav('hide')
			: currentScrollPos < prevScrollPos && currentScrollPos > 50
			? setVisibleNav('show')
			: setVisibleNav();

		// set state to new scroll position
		setPrevScrollPos(currentScrollPos);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return (
		<Container isLight={isLight} className={`${visibleNav} container`}>
			<div className='innerContainer'>
				<Link href='/'>
					<LogoContainer>
						<Logo />
					</LogoContainer>
				</Link>
				<HamburgerMenu
					setHamburgerMenuActiveStatus={setHamburgerMenuActiveStatus}
					hamburgerMenuActiveStatus={hamburgerMenuActiveStatus}
				/>

				<NavOptions
					data={data}
					hamburgerMenuActiveStatus={hamburgerMenuActiveStatus}
					setHamburgerMenuActiveStatus={setHamburgerMenuActiveStatus}
				/>

				<ThemeSwitcher isLight={isLight} setIsLight={setIsLight} />
			</div>
		</Container>
	);
};

export default Navigation;
