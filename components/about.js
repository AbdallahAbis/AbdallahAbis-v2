import Image from 'next/image';
import styled from 'styled-components';
import device from '../theme/media';
import { slideInBottom, slideInRight } from '../lib/animations';
import Headline from './custom/headline';
import Paragraph from './custom/paragraph';

// Styles Start
const Container = styled.section`
	display: flex;
	text-align: left;

	@media ${device.medium} {
		text-align: center;
	}
	@media ${device.large} {
		text-align: left;
	}
`;
const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media ${device.large} {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: repeat(3, max-content);
		align-items: center;
	}
`;
const Title = styled(Headline)`
	margin-bottom: 4rem;
	justify-content: flex-start;

	&.animate {
		animation: ${slideInBottom} var(--animation-duration)
			cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	@media ${device.medium} {
		justify-content: center;
	}
	@media ${device.large} {
		grid-column: 1 / span 2;
		grid-row: 1;
		justify-content: flex-start;
	}
`;
const Bio = styled(Paragraph)`
	margin-bottom: 3rem;

	&.animate {
		animation: ${slideInBottom} var(--animation-duration)
			cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	@media ${device.large} {
		margin-bottom: 6rem;
		max-width: 75%;
		grid-column: 1;
		grid-row: 2;
	}
`;
const SkillsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-row-gap: 1.5rem;
	grid-column-gap: 1rem;
	justify-items: start;
	position: relative;
	padding-left: 10px;
	font-size: 1.4rem;
	text-align: left;

	&.animate {
		animation: ${slideInBottom} var(--animation-duration)
			cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	&::before {
		display: none;
		content: '';
		position: absolute;
		top: 50%;
		width: 2px;
		height: 90%;
		transform: translate(-100%, -50%);
		background: var(--color-main);

		@media ${device.large} {
			display: block;
			height: 70%;
			display: block;
		}
	}

	@media ${device.medium} {
		padding-left: 5rem;
		font-size: 1.5rem;
		grid-template-columns: repeat(3, 1fr);
		justify-items: center;
		justify-items: center;
	}
	@media ${device.large} {
		grid-row-gap: 2.5rem;
		grid-column: 1;
		grid-row: 3;
		max-width: 75%;
		justify-items: left;
	}
`;
const Skill = styled.p`
	position: relative;
	line-height: 20px;
	height: max-content;
	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: -5px;
		width: 5px;
		height: 5px;
		transform: translate(-100%, -50%);
		background: var(--color-main);
		opacity: 0.9;
		color: var(--color-text);
	}
`;
const ObjectContainer = styled.div`
	display: block;
	position: relative;
	width: 215px;
	height: 349.4px;
	margin: 0 auto;
	margin-top: 5rem;

	&.animate {
		animation: ${slideInRight} var(--animation-duration)
			cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	& .profileImage {
		border-radius: 15px;
	}

	span {
		display: block;
		height: 100%;
		width: 100%;
		background-color: var(--color-primary-light);
		border-radius: 15px;

		position: absolute;
		left: 0;
		top: 0;

		opacity: 0.2;
	}
	@media ${device.large} {
		display: block;
		grid-column: 2;
		grid-row: 1 / span 3;
		width: 300px;
		height: 487.55px;
		margin-top: 0;
	}
`;
// Styles End

const About = ({ data: { skills, image, contentHtml } }) => {
	return (
		<Container id='about'>
			<InnerContainer>
				<Title data-animate forwardedAs='h2'>
					A Little About Me.
				</Title>
				<Bio
					data-animate
					dangerouslySetInnerHTML={{
						__html: contentHtml.slice(3, contentHtml.length - 5), // removed the <p></p> from the returned HTML
					}}
				/>
				<SkillsContainer data-animate>
					{skills.map((skill, i) => (
						<Skill key={i}>{skill}</Skill>
					))}
				</SkillsContainer>

				<ObjectContainer data-animate>
					<Image
						className='profileImage'
						width={300}
						height={487.55}
						quality={100}
						src={image}
					/>
					{/* the Image OverLay */}
					<span></span>
				</ObjectContainer>
			</InnerContainer>
		</Container>
	);
};

export default About;
