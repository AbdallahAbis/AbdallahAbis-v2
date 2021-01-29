import styled from 'styled-components';
import device from '../../../theme/media';

const List = styled.div`
	list-style: disc;
	li {
		font-size: 1.4rem;
		position: relative;
		margin-left: 2.5rem;

		&::marker {
			color: var(--color-text);
		}

		@media ${device.medium} {
			font-size: 1.6rem;
		}
	}
`;

const PostList = ({ ordered, children }) => {
	return <List as={ordered ? 'ol' : 'ul'}>{children}</List>;
};

export default PostList;
