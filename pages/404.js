// Credit https://codepen.io/kaypooma/pen/ehfjC

import Layout from '../components/layout';
import { getContentByPath } from '../lib/queryMarkdown';
import styled, { keyframes } from 'styled-components';

const noise1 = keyframes`
   0%, 20%, 40%, 60%, 70%, 90% {opacity: 0;}
  10% {opacity: .1;}
  50% {opacity: .5; left: -6px;}
  80% {opacity: .3;}
  100% {opacity: .6; left: 2px;}
`;
const noise2 = keyframes`
  0%, 20%, 40%, 60%, 70%, 90% {opacity: 0;}
  10% {opacity: .1;}
  50% {opacity: .5; left: 6px;}
  80% {opacity: .3;}
  100% {opacity: .6; left: -2px;}
`;
const noise = keyframes`
 0%, 3%, 5%, 42%, 44%, 100% {opacity: 1; transform: scaleY(1);}  
  4.3% {opacity: 1; transform: scaleY(1.7);}
  43% {opacity: 1; transform: scaleX(1.5);}
`;
const noise3 = keyframes`
  0%,3%,5%,42%,44%,100% {opacity: 1; transform: scaleY(1);}
  4.3% {opacity: 1; transform: scaleY(4);}
  43% {opacity: 1; transform: scaleX(10) rotate(60deg);}
`;

const Container = styled.section`
	.static {
		width: 100%;
		height: 100%;
		position: relative;
		margin: 0;
		padding: 0;
		top: -100px;
		opacity: 0.05;
		z-index: 230;
		user-select: none;
		user-drag: none;
	}

	.error {
		text-align: center;
		font-family: var(--font-body);
		font-size: 95px;
		font-style: italic;
		text-align: center;
		width: 100px;
		height: 60px;
		line-height: 60px;
		margin: auto;
		position: absolute;
		top: 0;
		bottom: 0;
		left: -60px;
		right: 0;
		animation: ${noise} 2s linear infinite;
		overflow: default;
	}

	.error:after {
		content: '404';
		font-family: var(--font-body);
		font-size: 100px;
		font-style: italic;
		text-align: center;
		width: 150px;
		height: 60px;
		line-height: 60px;
		margin: auto;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		opacity: 0;
		color: blue;
		animation: ${noise1} 0.2s linear infinite;
	}

	.info {
		text-align: center;
		font-family: var(--font-body);
		font-size: 15px;
		font-style: italic;
		text-align: center;
		width: 200px;
		height: 60px;
		line-height: 60px;
		margin: auto;
		position: absolute;
		top: 140px;
		bottom: 0;
		left: 0;
		right: 0;
		animation: ${noise3} 1s linear infinite;
	}

	.error:before {
		content: '404';
		font-family: var(--font-body);
		font-size: 100px;
		font-style: italic;
		text-align: center;
		width: 100px;
		height: 60px;
		line-height: 60px;
		margin: auto;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		opacity: 0;
		color: red;
		animation: ${noise2} 0.2s linear infinite;
	}
`;

const NotFoundPage = ({ navData }) => {
	return (
		<Layout data={navData}>
			<Container>
				<div className='error'>404</div>
				<br />
				<br />
				<span className='info'>Page not found</span>
				<img
					src='http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif'
					className='static'
				/>
			</Container>
		</Layout>
	);
};

export default NotFoundPage;

// this will retrieve content for each individual section
export async function getStaticProps() {
	// getContentByPath is accepting one argument which is the name of the folder that holds the content of the section
	const navData = await getContentByPath('navigation');

	// this props are returned and can be used by the IndexPage
	return {
		props: {
			navData,
		},
	};
}
