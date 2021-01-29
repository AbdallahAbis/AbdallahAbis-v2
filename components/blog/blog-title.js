import Link from 'next/link';
import styled from 'styled-components';
import device from '../../theme/media';

const Title = styled.a`
	font-family: var(--font-nova);
	font-size: 2rem;
	font-weight: 600;
	line-height: 30px;
	display: inline-block;

	&:hover {
		color: var(--color-main);
		opacity: 0.8;
	}

	@media ${device.large} {
		line-height: 38px;
		font-size: 2.8rem;
	}
	@media ${device.large} {
		justify-content: center;
	}
`;

const BlogTitle = ({ title, path, ...props }) => {
	return (
		<Link href={`/blog/${path}`} passHref>
			<Title {...props}>{title}</Title>
		</Link>
	);
};

export default BlogTitle;
