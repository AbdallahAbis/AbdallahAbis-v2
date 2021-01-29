import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import device from '../../theme/media';
import { shiny } from '../../lib/animations';

const shine = keyframes`
100%{
	left: 125%;
}
`;

const Container = styled.div`
	height: 100%;
	width: 100%;
	max-height: 300px;
	position: relative;
	overflow: hidden;
	border-radius: 5px;
	img {
		object-fit: cover;
		cursor: pointer;
	}

	@media ${device.large} {
		max-height: 100%;
	}

	&:hover:before {
		animation: ${shine} 0.75s;
	}
	&:before {
		position: absolute;
		top: 0;
		display: block;
		left: -75%;
		z-index: 2;
		content: '';
		width: 30%;
		height: 100%;
		background: linear-gradient(
			90deg,
			hsla(0, 0%, 100%, 0) 0,
			hsla(0, 0%, 100%, 0.3)
		);
		transform: skewX(-25deg);
	}
`;

const BlogImage = ({ image, imageBase64, ...props }) => {
	return (
		<Container {...props}>
			<img
				aria-hidden='true'
				alt=''
				src={imageBase64}
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					objectPosition: 'center',
					filter: 'blur(2rem)',
					transform: 'scale(1.2)',
				}}
			/>

			<Image src={image} layout='fill' quality={90} />
		</Container>
	);
};

export default BlogImage;
