import Headline from '../components/custom/headline';
import styled from 'styled-components';
import device from '../theme/media';
import Layout from '../components/layout';
import { getContentByPath } from '../lib/queryMarkdown';
import { slideInBottom } from '../lib/animations';
import Head from 'next/head';

// Styles Start
const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Title = styled(Headline)`
	font-size: 4rem;
	margin-bottom: 0;
	opacity: 0;
	animation: ${slideInBottom} var(--animation-duration) 2s
		cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

	@media ${device.large} {
		font-size: 5rem;
	}
	@media ${device.large} {
		justify-content: center;
	}
`;
// Styles End

const Blog = ({ navData }) => {
	return (
		<>
			<Head>
				<meta
					name='description'
					content='I write about all web dev related topics, you can find here topics about CSS, JavaScript, HTML, React, Next.js, Gatsby.js, Redux.js ...'
				/>
			</Head>
			<Layout data={navData}>
				<Container>
					<Title>Coming Soon!</Title>
				</Container>
			</Layout>
		</>
	);
};

export default Blog;

export async function getStaticProps() {
	const navData = await getContentByPath('navigation');

	return {
		props: {
			navData,
		},
	};
}
