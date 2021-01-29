import styled from 'styled-components';

const Heading = styled.div`
	opacity: 0.8;
	padding-left: 0rem;
	font-family: var(--font-nova);
	position: relative;
	padding-left: 1rem;
	line-height: 2.3rem;
	margin: 4rem 0 1rem 0;

	&:before {
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		width: 2px;
		height: 50%;
		transform: translateY(-50%);
		background: var(--color-main);
		opacity: 0.9;
		color: var(--color-text);
	}

	&.h2 {
		font-size: 2.2rem;
	}
`;
const PostHeading = ({ level, children }) => {
	return (
		<Heading as={`h${level}`} className={level === 2 && 'h2'}>
			{children}
		</Heading>
	);
};

export default PostHeading;
