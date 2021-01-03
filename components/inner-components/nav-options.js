import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import device from '../../theme/media';
import { bounceInTop, flicker } from '../../utils/animations';
import CustomButton from '../custom/button';

const Options = styled.div`
	position: absolute;
	top: var(--nav);
	width: 100%;
	max-height: 0;
	background-color: var(--color-primary);
	font-size: 1.1rem;
	font-weight: 700;
	text-align: center;
	overflow: hidden;
	transition: max-height 0.3s;
	display: block;
	box-shadow: 0px 13px 15px -13px #000;

	&.true {
		overflow-x: hidden;
		box-sizing: content-box;
		max-height: ${({ elHeight }) => elHeight + 'px'};
		transition: max-height 0.3s;
	}

	ul {
		li {
			padding: 2rem 0;
			transition: opacity 0.2s;

			.active {
				color: var(--color-main);
				opacity: 1;
			}

			&:first-child {
				padding-top: 4rem;
			}
			&:last-child {
				padding-bottom: 4rem;
			}
			@media ${device.large} {
				&:nth-child(1) {
					animation: ${bounceInTop} 3s ease-out both;
				}
				&:nth-child(2) {
					animation: ${bounceInTop} 3s ease-out 0.1s both;
				}
				&:nth-child(3) {
					animation: ${bounceInTop} 3s ease-out 0.2s both;
				}
				&:nth-child(4) {
					animation: ${bounceInTop} 3s ease-out 0.3s both;
				}
				&:nth-child(5) {
					animation: ${bounceInTop} 3s ease-out 0.4s both;
				}
			}
		}
	}

	/* Media Queries */
	@media ${device.large} {
		max-height: unset;
		position: static;
		background-color: unset;
		width: min-content;
		box-shadow: unset;

		display: flex;
		justify-content: space-between;

		ul {
			display: flex;
			justify-content: space-between;
			align-items: center;

			li {
				a {
					opacity: 0.7;
					&:hover {
						transition: opacity 0.2s;
						opacity: 1;
					}
				}

				&,
				&:first-child,
				&:not(:last-child) {
					padding: 0;
					margin: 0 2.5rem;
				}
				&:last-child {
					padding: 0;
					margin-left: 10rem;
					margin-right: 0;
					& {
						button:hover {
							background-color: var(--color-main-lighter);
						}
					}
				}
			}
		}
	}
`;

const Button = styled(CustomButton)`
	@media ${device.large} {
		animation: ${flicker} 2s 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}
`;
const NavOptions = ({
	hamburgerMenuActiveStatus,
	setHamburgerMenuActiveStatus,
	data: { routes: options, button },
}) => {
	const [navHeight, setNavHeight] = useState(0);
	const [activeNavLink, setActiveNavLink] = useState(0);
	const navRef = useRef(null);
	const location = useRouter();

	useEffect(() => {
		const activeHash = location.asPath.slice(2);
		const active = options.filter((el) => el.toLowerCase() === activeHash);
		setActiveNavLink(active[0] ? active[0] : 'home');
		setNavHeight(navRef.current.offsetHeight);
	}, [setNavHeight, location, options]);

	useEffect(() => {
		function handleClickOutside(e) {
			const click = e.target;
			const navList = navRef.current;
			const links = document.querySelectorAll('.navLink');
			const hamburgerMenuOpened = document.querySelector('.hamburgerOpened');
			const anyLinkContainsClick = Array.from(links).some((link) =>
				link.contains(click)
			);

			if (!hamburgerMenuActiveStatus || hamburgerMenuOpened.contains(click))
				return;
			if (!navList.contains(click) || anyLinkContainsClick)
				return setHamburgerMenuActiveStatus(false);
		}
		if (hamburgerMenuActiveStatus)
			document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	});

	return (
		<Options
			className={hamburgerMenuActiveStatus.toString()}
			elHeight={navHeight && navHeight}
		>
			<ul ref={navRef}>
				{options.map((option, i) => (
					<li key={i}>
						<Link
							href={
								option.toLowerCase() === 'home'
									? '/'
									: option.toLowerCase() === 'blog'
									? '/blog'
									: `/#${option.toLowerCase()}`
							}
						>
							<a
								className={
									option.toLowerCase() === activeNavLink
										? 'active navLink'
										: 'navLink'
								}
							>
								{option.toUpperCase()}
							</a>
						</Link>
					</li>
				))}
				<li>
					<Button className='navLink' href='/#contact'>
						{button}
					</Button>
				</li>
			</ul>
		</Options>
	);
};

export default NavOptions;
