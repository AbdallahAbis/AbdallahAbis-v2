import styled from 'styled-components';
import device from '../../../theme/media';

const Paragraph = styled.p`
	opacity: 0.8;
	margin-bottom: 1.5rem;

	@media ${device.large} {
		margin-bottom: 2.5rem;
	}
`;

const PostParagraph = ({ children }) => {
	return <Paragraph>{children}</Paragraph>;
};

export default PostParagraph;
