import styled from 'styled-components';
import { smallSlideBottom } from '../../lib/animations';
import device from '../../theme/media';
import CategoryAndDate from './blog-categoryAndDate';
import Description from './blog-description';
import BlogImage from './blog-image';
import Signature from './blog-signature';
import BlogTitle from './blog-title';

const Header = styled.div`
	grid-column: span 1;
	text-align: left;
	display: grid;
	grid-auto-rows: 18rem auto;

	&.animate {
		animation: ${smallSlideBottom} var(--animation-duration)
			cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	@media ${device.large} {
		grid-column: span 2;
	}
`;

const SmallerTitle = styled(BlogTitle)`
	@media ${device.large} {
		font-size: 2.4rem;
	}
`;
const SmallerDescription = styled(Description)`
	font-size: 1.6rem;
	margin-top: 1rem;

	@media ${device.large} {
		-webkit-line-clamp: 2;
		margin-bottom: 4rem;
	}
`;

const BlogInfo = styled.div`
	position: relative;
	padding-bottom: 6rem;
	padding-top: 2rem;

	@media ${device.large} {
		padding: 2rem 0;
	}
`;

// Styles End

const ThreeColumns = ({ post }) => {
	return (
		<Header data-animate>
			<BlogImage
				priority
				image={post?.thumbnail}
				blurredImage={post.blurredImage}
			/>
			<BlogInfo>
				<CategoryAndDate category={post?.category} date={post?.date} />
				<SmallerTitle title={post?.title} path={post?.path} />
				<SmallerDescription description={post?.description} />
				<Signature
					author={post?.author?.name}
					authorImage={post?.author?.image}
					blurredAuthorImage={post?.blurredAuthorImage}
				/>
			</BlogInfo>
		</Header>
	);
};

export default ThreeColumns;
