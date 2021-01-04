import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import device from '../theme/media';
import Navigation from './navigation';
import Particles from 'react-tsparticles';
import Loader from './loader';
import { useRouter } from 'next/router';
import AnimateInView from '../lib/isInView';

const GlobalStyle = createGlobalStyle`

/* Global Variables */
  :root{
  --color-primary: #090117;
  --color-primary-darker: #050a0f;
  --color-primary-lighter: #050c1e;
  --color-primary-light: #09141f;
  --color-primary-vLight: #0d1c2b;
  --color-text: #DEDEDE;
  --color-main: #1cd439;
  --color-main-lighter: #27e245;
  --color-main-darker: #19bd33;


  --font-body: 'Eina01', sans-serif;
  --font-code: 'firaCode', sans-serif;
  --font-circular: 'circular', sans-serif;

  --nav: 8rem;
  --container-padding: 0 2.5rem;

  --animation-duration: 0.5s;
   
  }

/* Presets */
  *, *:before, *:after{
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

::-moz-selection, ::selection {
  color: var(--color-primary);
  background: var(--color-main);
}

/* Global Styles */
  html{
    font-size: 62.5%;
    box-sizing: border-box;
    overflow-x: hidden;
	scroll-behavior:smooth;

  }

  body {
    background-color: var(--color-primary);
    color: var(--color-text);
    font-family: var(--font-body);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 0.8;
	min-height: 100vh;
	position: relative;
	
	overflow: inherit;
  }

  main{
      text-align: center;
       @media ${device.large} {
        text-align: left;
       }
  }

  input,
  textarea,
  button,
  select,
  a,
  div {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      outline-color: var(--color-main);
      font-family: var(--font-text);

    }
  
  button {
    background-color: transparent;
    border: none;
	cursor: pointer;
    outline:none;
  }

  a {
    color: var(--color-text);
    text-decoration: none;
  }
  ul{
    list-style: none;
  }

  section{
    min-height: 90vh;
	height: auto;
	padding-top: var(--nav);
	&:not(:first-child){
	padding-top: 10rem;
	}
  }

  /* Global Class Names */
 .container{
	padding: var(--container-padding);
  }
.innerContainer{
 	margin: 0 auto;
    max-width: 360px;
	width: 100%;
    
    @media ${device.medium}{
      max-width: 768px;
    }
    @media ${device.large}{
      max-width: 1025px;
    }
    @media ${device.xLarge}{
      max-width: 1280px;
    }
    @media ${device.xxLarge}{
      max-width: 1441px;
    }
    @media ${device.huge}{
      max-width: 1921px;
    }
  }
  

  /* Set Particles Background   */
  .tsparticles, #tsparticles{
    position: fixed;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    z-index: -10;
  }

/* Animated Elements Global Style */
 [data-animate]{
	  opacity: 0;
  }
`;

const Layout = ({ children, data }) => {
	const location = useRouter();
	const { asPath } = location;
	const [loaded, setLoaded] = useState(true);
	const [sectionForTitle, setSectionForTitle] = useState('Front-end Web Dev');

	// Changes the Window Title (The Part After | )
	const changeTitle = (path) => {
		if (!path || path === '/') return setSectionForTitle('Front-end Web Dev');
		setSectionForTitle(path);
	};

	useEffect(() => {
		// Scroll to top when reloaded
		location.push(location.pathname === '/' ? '/' : location.pathname);
		window.scrollTo(0, 0);

		// Executing The Func That is responsible of Detecting in View Elements
		AnimateInView();

		// Setting Loading to False After the Loading Animation is Finished
		setTimeout(() => {
			setLoaded(true);
		}, 2700);
	}, []);

	// Calling this after the site is loaded and every time the URL is Changes
	useEffect(() => {
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
			<GlobalStyle />

			{!loaded ? ( // If loaded === false then render <Loader/> otherwise render the other part
				<Loader />
			) : (
				// .container is responsible of Websites X-Axis Padding, .innerContainer is responsible of the max-width of the website
				<>
					{data ? <Navigation data={data} /> : null}
					<main className='container'>
						<div className='innerContainer'>{children}</div>
					</main>
					<Particles
						className='tsparticles'
						options={{
							fpsLimit: 60,
							interactivity: {
								detectsOn: 'canvas',
								events: {
									resize: true,
								},
								modes: {
									bubble: {
										distance: 400,
										duration: 2,
										opacity: 0.8,
										size: 40,
									},
									push: {
										quantity: 4,
									},
									repulse: {
										distance: 200,
										duration: 0.4,
									},
								},
							},
							particles: {
								color: {
									value: '#0d1c2b',
								},
								links: {
									color: '#0d1c2b',
									distance: 150,
									enable: true,
									opacity: 0.7,
									width: 1,
								},
								collisions: {
									enable: true,
								},
								move: {
									direction: 'none',
									enable: true,
									outMode: 'bounce',
									random: false,
									speed: 6,
									straight: false,
								},
								number: {
									density: {
										enable: true,
										value_area: 800,
									},
									value: 80,
								},
								opacity: {
									value: 0.5,
								},
								shape: {
									type: 'circle',
								},
								size: {
									random: true,
									value: 5,
								},
							},
							detectRetina: true,
						}}
					/>
				</>
			)}
		</>
	);
};

export default Layout;
