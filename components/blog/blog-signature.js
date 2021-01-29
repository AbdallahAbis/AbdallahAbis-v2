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
		img {
			height: 4rem;
			width: 4rem;
			border-radius: 50%;
			margin-right: 1rem;
			opacity: 1;
			object-fit: cover;
		}
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

const Signature = ({ author, authorImage }) => {
	return (
		<Container>
			<div>
				<img src={authorImage} alt='' />
				<p>
					<span>By</span> {author}
				</p>
			</div>
		</Container>
	);
};

export default Signature;
