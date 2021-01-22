import styled, { css } from 'styled-components';
import NextJsIcon from '../public/icons/next-js.svg';
import GithubIcon from '../public/icons/github.svg';
import VercelIcon from '../public/icons/vercel.svg';
import device from '../theme/media';
const Container = styled.div`
	font-family: var(--font-code);
	font-size: 1.2rem;
	position: absolute;
	z-index: 1000;
	bottom: 0px;
	left: 0px;
	width: 100%;
	min-height: 6rem;
	color: var(--color-text);
	border-top: 0.5px solid rgba(222, 222, 222, 0.3);
	background: var(--color-primary);
	padding-top: 1.5rem;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media ${device.medium} {
		flex-direction: row;
	}

	p {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}
`;
const icon = css`
	height: 2rem;
	width: 2rem;
	margin-left: 1rem;
	margin-right: 1rem;
	fill: var(--color-text);
`;
const NextJs = styled(NextJsIcon)`
	${icon}
`;
const Github = styled(GithubIcon)`
	${icon}
`;
const Vercel = styled(VercelIcon)`
	${icon}
`;

const Footer = () => {
	return (
		<Container>
			<p>
				©&nbsp;<a href=''>Abis Abdallah</a>&nbsp;2020 - 2021.
			</p>

			<p>
				&nbsp;Built with
				<a href='https://nextjs.org/'>
					<NextJs />
				</a>
				open sourced on
				<a href='https://github.com/AbdallahAbis/AbdallahAbis-v2'>
					<Github />
				</a>
			</p>
			<p>
				and deployed on
				<a href='https://vercel.com/'>
					<Vercel />
				</a>
			</p>
		</Container>
	);
};

export default Footer;
