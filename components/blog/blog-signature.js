import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 100%;
	display: flex;

	align-items: center;
	font-size: 1.1rem;

	div {
		display: flex;
		align-items: center;
		height: 4rem;
		p {
			white-space: nowrap;
			font-weight: 700;
			opacity: 0.7;
		}
	}

	span {
		color: var(--color-text);
		font-weight: 400;
	}

	&:after {
		content: '';
		width: 30%;
		height: 1px;
		margin-left: 2rem;
		position: relative;
		background-color: var(--color-primary-diff-3);
	}
`;

const ImageContainer = styled.div`
	height: 4rem;
	width: 4rem;
	overflow: hidden;
	border-radius: 50%;
	margin-right: 1rem;
	opacity: 1;
	position: relative;
	img {
		object-fit: cover;
	}
`;

const Signature = ({ author, authorImage, blurredAuthorImage }) => {
	return (
		<Container>
			<div>
				<ImageContainer>
					<div
						style={{
							...blurredAuthorImage,
							height: '100%',
							width: '100%',
							filter: 'blur(0.3rem)',
							transform: 'scale(1.2)',
						}}
					/>
					<Image layout='fill' quality={50} src={authorImage} alt='' />
				</ImageContainer>
				<p>
					<span>By</span> {author}
				</p>
			</div>
		</Container>
	);
};

export default Signature;
