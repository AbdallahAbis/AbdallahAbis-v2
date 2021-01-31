import styled from 'styled-components';
import { smallSlideBottom } from '../../lib/animations';
import device from '../../theme/media';
import CategoryAndDate from './blog-categoryAndDate';
import Description from './blog-description';
import BlogImage from './blog-image';
import Signature from './blog-signature';
import BlogTitle from './blog-title';

// Styles Start

const Header = styled.div`
	grid-column: 1 / -1;
	width: 100%;
	text-align: left;
	display: grid;
	grid-auto-rows: 18rem auto;

	&.animate {
		animation: ${smallSlideBottom} var(--animation-duration)
			cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	@media ${device.medium} {
		grid-auto-rows: 30rem auto;
	}
	@media ${device.large} {
		grid-template-columns: 2fr 1fr;
		grid-auto-rows: 40rem auto;
		gap: 3rem;
	}
`;

const BlogInfo = styled.div`
	position: relative;
	padding-bottom: 6rem;
	padding-top: 2rem;

	@media ${device.large} {
		grid-column: 2;
		padding: 2rem 0;
	}
`;

// Styles End

const OneColumnPost = ({ post }) => {
	console.log(post);
	return (
		<Header data-animate>
			<BlogImage
				priority
				image={post?.thumbnail}
				blurredImage={post.blurredImage}
			/>
			<BlogInfo>
				<CategoryAndDate category={post?.category} date={post?.date} />
				<BlogTitle title={post?.title} path={post?.path} />
				<Description description={post?.description} />
				<Signature
					author={post?.author?.name}
					authorImage={post?.author?.image}
					blurredAuthorImage={post?.blurredAuthorImage}
				/>
			</BlogInfo>
		</Header>
	);
};

export default OneColumnPost;

export async function getStaticProps() {
	const navData = await getContentByPath('navigation');

	return {
		props: {
			navData,
		},
	};
}
