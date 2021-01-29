import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import CategoryAndDate from '../../components/blog/blog-categoryAndDate';
import CodeSnippet from '../../components/blog/post/code-snippet';
import PostHeading from '../../components/blog/post/headings';
import PostImage from '../../components/blog/post/image';
import PostList from '../../components/blog/post/list';
import PostParagraph from '../../components/blog/post/paragraphs';
import PostTitle from '../../components/blog/post/title';
import Layout from '../../components/layout/layout';
import {
	getContentByPath,
	getPostBySlug,
	getBlogPosts,
} from '../../lib/queryMarkdown';
import device from '../../theme/media';
import { smallSlideBottom } from '../../lib/animations';
import ThreeColumns from '../../components/blog/grid-threeColumns';
import BlogTitle from '../../components/blog/blog-title';

// Styles Start
const Container = styled.section`
	font-family: var(--font-nova);
	font-weight: 400;
	padding-top: 5rem;
	padding-bottom: 5rem;
	text-align: left;
	max-width: 640px;
	margin: 0 auto;

	&.animate {
		animation: ${smallSlideBottom} var(--animation-duration)
			cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	@media ${device.large} {
		padding-top: 10rem;
		max-width: 751px;
	}
`;

const Content = styled(ReactMarkdown)`
	font-size: 1.6rem;
	line-height: 2.6rem;

	ul {
	}

	@media ${device.medium} {
		font-size: 1.6rem;
		line-height: 2.9rem;
	}
	@media ${device.large} {
		font-size: 1.8rem;
		line-height: 3.2rem;
	}
`;

const renderers = {
	paragraph: (paragraph) => {
		const { node } = paragraph;
		if (node.children[0].type === 'image') {
			const image = node.children[0];
			return <PostImage url={image.url} alt={image.alt} />;
		}

		return <PostParagraph>{paragraph.children}</PostParagraph>;
	},
	heading: (heading) => {
		const { node } = heading;

		return <PostHeading level={node.depth}>{heading.children}</PostHeading>;
	},
	list: (list) => {
		const { node } = list;
		return <PostList ordered={node.ordered}>{list.children}</PostList>;
	},
	code: ({ language, value }) => {
		return <CodeSnippet language={language} value={value} />;
	},
};

const LatestTitle = styled(PostTitle)`
	margin: 0;
	margin-top: 7rem;
`;
const OtherBlogsContainer = styled.div`
	display: grid;
	padding: 3rem 0;
	grid-row-gap: 8rem;
	padding-bottom: 10rem;

	@media ${device.medium} {
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 5rem;
		padding: 5rem 0;
		padding-bottom: 15rem;
	}
	@media ${device.large} {
		grid-template-columns: repeat(6, 1fr);
		grid-column-gap: 8rem;
	}
`;

const BlogPost = ({ navData, postData, blogData }) => {
	return (
		<Layout data={navData}>
			<Container data-animate>
				<CategoryAndDate date={postData?.date} category={postData?.category} />
				<PostTitle>{postData?.title}</PostTitle>
				<Content
					unwrapDisallowed={true}
					children={postData.content}
					renderers={renderers}
				/>
			</Container>
			<div>
				<LatestTitle>Latest Blog Posts</LatestTitle>
				<OtherBlogsContainer>
					{blogData.map(
						(post, i) => i < 3 && <ThreeColumns key={i} post={post} />
					)}
				</OtherBlogsContainer>
			</div>
		</Layout>
	);
};

export default BlogPost;

export async function getStaticProps({ params }) {
	const { post } = params;

	const navData = await getContentByPath('navigation');
	const blogData = await getBlogPosts();

	const postData = getPostBySlug(post, [
		'title',
		'date',
		'path',
		'category',
		'author',
		'content',
		'thumbnail',
		'coverImage',
	]);

	return {
		props: {
			navData,
			postData,
			blogData,
		},
	};
}

export async function getStaticPaths() {
	const pureBlogData = await getBlogPosts();

	const paths = pureBlogData.map((post) => ({
		params: { post: post.path },
	}));
	return {
		paths,
		fallback: false,
	};
}
