import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AnimateInView from '../../lib/isInView';
import device from '../../theme/media';
import Footer from '../footer';
import Navigation from '../navigation';
import Particles from '../inner-components/particles';
import { AnimationsContext } from '../../contexts/animationsContext';
import SocialMedia from '../inner-components/social-media';
import { rollInBottom } from '../../lib/animations';
import Email from '../inner-components/email';
import GlobalStyles from '../../theme/global/global-styles';

const Layout = ({ children, data }) => {
	const location = useRouter();
	const { asPath } = location;
	const [sectionForTitle, setSectionForTitle] = useState('Front-end Web Dev');
	const [noAnimations, setNoAnimations] = useContext(AnimationsContext);

	// Changes the Window Title (The Part After | )
	const changeTitle = (path) => {
		if (!path || path === '/') return setSectionForTitle('Front-end Web Dev');
		setSectionForTitle(path);
	};

	useEffect(() => {
		// Scroll to top when reloaded
		if (location.route === '/') {
			location.push(location.pathname === '/' ? '/' : location.pathname);
			window.scrollTo(0, 0);
		}

		if (location.route !== '/') setNoAnimations(true);

		// Executing The Func That is responsible of Detecting in View Elements
		AnimateInView();
	}, []);

	// Calling this after the site is loaded and every time the URL is Changes
	useEffect(() => {
		if (location.route === '/blog/[post]') {
			return changeTitle(location.query.post.replace(/-/g, ' '));
		}
		const setPath =
			location.route === '/'
				? `${location.asPath.slice(2).charAt(0).toUpperCase()}${asPath.slice(
						3
				  )}`
				: `${location.route.slice(1).charAt(0).toUpperCase()}${asPath.slice(
						2
				  )}`;
		return changeTitle(setPath); // Capitalizing first letter of the section's id (about => About)
	}, [asPath]);

	return (
		<>
			<Head>
				<title>{`Abdallah Abis | ${sectionForTitle}`}</title>
			</Head>
			<GlobalStyles />
			<Navigation data={data} />
			<main className='container'>
				<div className='innerContainer'>{children}</div>
			</main>
			<Footer />
			{location.route !== '/blog/[post]' && <SocialMedia />}
			{/* <Email /> */}
			<Particles />
		</>
	);
};

export default Layout;
