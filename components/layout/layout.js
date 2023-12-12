import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { AnimationsContext } from '../../contexts/animationsContext';
import AnimateInView from '../../lib/isInView';
import GlobalStyles from '../../theme/global/global-styles';
import Footer from '../footer';
import Particles from '../inner-components/particles';
import SocialMedia from '../inner-components/social-media';
import Navigation from '../navigation';

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
      <main className="container">
        <div className="innerContainer">{children}</div>
      </main>
      <Footer />
      {location.route !== "/blog/[post]" && <SocialMedia />}
      <Particles />
	  <SpeedInsights />
    </>
  );
};

export default Layout;
