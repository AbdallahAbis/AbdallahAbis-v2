import styled from 'styled-components';
import device from '../../../theme/media';

const Title = styled.h1`
	font-family: var(--font-nova);
	font-weight: 600;
	font-size: 2.4rem;
	line-height: 3.3rem;
	opacity: 1;

	margin: 2rem auto 5rem auto;

	@media ${device.large} {
		font-size: 4rem;
		line-height: 4.9rem;
	}
`;

const PostTitle = ({ children, ...props }) => {
	return <Title {...props}>{children}</Title>;
};

export default PostTitle;
