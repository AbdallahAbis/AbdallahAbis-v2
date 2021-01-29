import Headline from '../components/custom/headline';
import styled from 'styled-components';
import device from '../theme/media';
import Layout from '../components/layout/layout';
import { getBlogPosts, getContentByPath } from '../lib/queryMarkdown';
import { slideInBottom } from '../lib/animations';
import Head from 'next/head';
import OneColumnPost from '../components/blog/blog-oneColumn';
import TwoColumnsPost from '../components/blog/blog-twoColumns';
import ThreeColumns from '../components/blog/grid-threeColumns';

// Styles Start
const Container = styled.section`
	display: grid;
	grid-row-gap: 8rem;
	padding: 3rem 0;

	@media ${device.medium} {
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 5rem;
		padding: 5rem 0;
	}
	@media ${device.large} {
		grid-template-columns: repeat(6, 1fr);
		grid-column-gap: 8rem;
		padding: 8rem 0;
	}
`;

// Styles End

const Blog = ({ navData, pureBlogData }) => {
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
					{pureBlogData.map((post, i) =>
						i === 0 ? (
							<OneColumnPost key={i} post={post} />
						) : i <= 2 ? (
							<TwoColumnsPost key={i} post={post} />
						) : (
							<ThreeColumns key={i} post={post} />
						)
					)}
				</Container>
			</Layout>
		</>
	);
};

export default Blog;

export async function getStaticProps() {
	const navData = await getContentByPath('navigation');
	const pureBlogData = await getBlogPosts();

	return {
		props: {
			navData,
			pureBlogData,
		},
	};
}
