import styled from 'styled-components';
import Image from 'next/image';
import device from '../theme/media';
import { slideInBottom } from '../utils/animations';
import Headline from './custom/headline';
import OpenInNew from '../public/new-window.svg';
import Github from '../public/github.svg';

// Styles Start
const Container = styled.section``;
const InnerContainer = styled.div`
	display: grid;
	grid-gap: 2rem;
	justify-items: center;

	@media ${device.medium} {
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: max-content;
	}

	@media ${device.large} {
		grid-template-columns: repeat(3, 1fr);
	}
`;
const Project = styled.div`
	height: 50rem;
	width: 90%;
	background-color: var(--color-primary-vLight);
	position: relative;
	box-shadow: 0 1px 7px 6px rgba(0, 0, 0, 0.2);
	font-family: var(--font-circular);
	font-size: 1.3rem;

	&.animate {
		animation: ${slideInBottom} var(--animation-duration)
			cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	@media ${device.medium} {
		height: 55rem;
		width: 30rem;

		&:nth-child(even) {
			margin-top: 10rem;
		}
	}
	@media ${device.large} {
		/* height: 70rem;
		width: 40rem; */
	}
	&:before,
	&:after {
		content: '';
		position: absolute;
		width: 10%;
		height: 5%;
	}
	&:before {
		left: -0.5rem;
		top: -0.5rem;
		border-top: 2px solid var(--color-main);
		border-left: 2px solid var(--color-main);
	}
	&:after {
		bottom: -0.5rem;
		right: -0.5rem;
		border-bottom: 2px solid var(--color-main);
		border-right: 2px solid var(--color-main);
	}
`;
const Overlay = styled.div`
	position: absolute;

	top: 0;
	left: 0;

	height: 100%;
	width: 100%;

	background-color: var(--color-primary-vLight);
	z-index: 1;

	opacity: 0.9;
`;
const Title = styled(Headline)`
	&.animate {
		animation: ${slideInBottom} var(--animation-duration)
			cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}
`;
const Content = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	color: var(--color-text);
	z-index: 1;
	padding: 2rem 1rem;
`;
const Techs = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	p {
		width: max-content;
		background: var(--color-primary-vLight);
		padding: 0.5rem 1rem;
		border-radius: 2px;
		position: relative;
		margin-bottom: 1rem;

		&:not(:last-child) {
			margin-right: 1rem;
		}
	}
`;
const Description = styled.p`
	line-height: 20px;

	position: absolute;
	top: 50%;
	left: 50%;
	width: 90%;

	transform: translate(-50%, -50%);

	@media ${device.large} {
		text-align: center;
	}
`;
const Icons = styled.div`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	padding-bottom: 2rem;
	display: grid;
	grid-template-columns: repeat(2, max-content);
	grid-column-gap: 4rem;

	svg {
		height: 2.5rem;
		fill: var(--color-text);
	}
`;
// Styles End

const Work = ({ data: { projects } }) => {
	return (
		<Container id='work'>
			<Title data-animate>Experimental Work.</Title>

			<InnerContainer>
				{projects.map((project, i) => (
					<Project key={i} data-animate>
						<Overlay />
						<Image src={project?.image} layout='responsive' layout='fill' />
						<Content>
							<Techs>
								{project?.techs?.map((tech, i) => (
									<p key={i}>{tech}</p>
								))}
							</Techs>

							<Description>{project?.description}</Description>

							<Icons>
								<a href={project?.live}>
									<OpenInNew />
								</a>
								<a href={project?.github}>
									<Github />
								</a>
							</Icons>
						</Content>
					</Project>
				))}
			</InnerContainer>
		</Container>
	);
};

export default Work;
