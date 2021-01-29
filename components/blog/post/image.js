import styled from 'styled-components';
import Image from 'next/image';
import device from '../../../theme/media';

const ImageContainer = styled.div`
	position: relative;
	margin-bottom: 1.5rem;
	height: 200px;
	max-height: 300px;

	img {
		object-fit: cover;
		border-radius: 5px;
	}
	@media ${device.medium} {
		height: 300px;
	}
	@media ${device.large} {
		height: 300px;
		margin-bottom: 2.5rem;
	}
`;

const PostImage = ({ url, alt }) => {
	return (
		<ImageContainer>
			<Image src={url} alt={alt} layout='fill' />
		</ImageContainer>
	);
};

export default PostImage;
