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

const Container = styled.nav`
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	transition: 0.2s;
	width: 100%;

	&.show {
		box-shadow: 0 1px 7px 6px rgba(0, 0, 0, 0.9);
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

const Navigation = ({ data }) => {
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
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1'
				/>
				<meta
					name='description'
					content="I'm a front-end web developer, currently freelancing full-time on Upwork, I offer money-back guarantee, premium, after-sales service, you..."
				/>
				<meta
					name='keywords'
					content='JavaScript, developer, web, web dev, front-end, CSS, HTML, JS, React, Abdallah Abis, Abis, Gatsby.js, Next.js'
				/>

				<link rel='manifest' href='/manifest.json' />
				<link
					href='/manifest/favicon-16x16.png'
					rel='icon'
					type='image/png'
					sizes='16x16'
				/>
				<link
					href='/manifest/favicon-32x32.png'
					rel='icon'
					type='image/png'
					sizes='32x32'
				/>
				<link rel='apple-touch-icon' href='/manifest/apple-icon.png'></link>
				<meta name='theme-color' content='#090117' />
			</Head>
			<Container className={`${visibleNav} container`}>
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
				</div>
			</Container>
		</>
	);
};

export default Navigation;
