import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rollInLeft } from '../lib/animations';
import HamburgerMenu from './inner-components/hamburgerMenu';
import { useRouter } from 'next/router';
import NavOptions from './inner-components/nav-options';
import Logo from '../public/brand/logo.svg';
import device from '../theme/media';

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
	const [classNameOnScroll, setClassNameOnScroll] = useState('');

	useEffect(() => {
		let lastScroll = 0;
		const scrollCallBack = window.addEventListener('scroll', () => {
			const currentScroll = window.pageYOffset;

			currentScroll > 80 && currentScroll > lastScroll
				? setClassNameOnScroll('hide')
				: currentScroll < lastScroll && currentScroll > 50
				? setClassNameOnScroll('show')
				: setClassNameOnScroll('');

			lastScroll = currentScroll;

			return () => {
				window.removeEventListener('scroll', scrollCallBack);
			};
		});
	}, []);

	return (
		<Container className={`${classNameOnScroll} container`}>
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
	);
};

export default Navigation;
