import { useEffect } from 'react';
import styled from 'styled-components';
import device from '../theme/media';
import Headline from './custom/headline';
import carousel from '../utils/carousel';
import Image from 'next/image';
import Logo from '../public/logo.svg';

const Container = styled.section`
	@media ${device.large} {
		margin-top: 15rem;
	}
`;
const Title = styled(Headline)`
	@media ${device.large} {
		justify-content: center;
	}
`;
const OuterContainer = styled.div`
	overflow: hidden;
	width: 100%;
	min-width: 100%;
	padding-bottom: 2.5rem;
	padding-top: 1rem;
	margin: 0 auto;

	@media ${device.large} {
	}
`;
const InnerContainer = styled.div`
	display: flex;
	flex-wrap: nowrap;
	transition: transform 0.5s ease;
`;
const BlogPost = styled.div`
	width: 100%;
	min-width: 100%;
	max-width: 500px;
	height: 40rem;
	background-color: rgba(9, 20, 31, 0.8);
	text-align: left;
	line-height: 20px;
	position: relative;

	&:not(:last-child) {
		margin-right: 1rem;

		@media ${device.large} {
			margin-right: 2rem;
		}
	}
	@media ${device.medium} {
		min-width: 11%;
	}
`;
const ContentContainer = styled.div`
	padding: 0 2rem;
`;
const BlogTitle = styled.h3`
	margin-top: 2rem;
	font-family: var(--font-circular);
	font-size: 1.5rem;
`;
const BlogShortDescription = styled.p`
	margin-top: 1.5rem;
	font-size: 1.3rem;
	opacity: 0.7;
`;

const Info = styled.div`
	position: absolute;
	bottom: 0.3rem;
	left: 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1rem;
	padding: 0 2rem;

	span {
		opacity: 0.8;
	}
`;
const Author = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	p {
		opacity: 0.8;
	}
`;

const Blog = () => {
	useEffect(() => {}, []);
	return (
		<Container id='blog'>
			<Title>I Also Blog.</Title>

			<OuterContainer>
				<InnerContainer id='blog-slides'>
					<BlogPost className='blog-slide'>
						<Image
							src='/shopse.png'
							layout='responsive'
							width={360}
							height={200}
							objectFit='cover'
						></Image>

						<ContentContainer>
							<BlogTitle>
								How Did I start Learning Web development, and Why?
							</BlogTitle>
							<BlogShortDescription>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Deleniti neque quod exercitationem excepturi unde placeat
								mollitia cupiditate nisi, voluptate aperiam...
							</BlogShortDescription>

							<Info>
								<Author>
									<p>
										<strong>By</strong> Abdallah Abis
									</p>
								</Author>
								<span>31 March 2020</span>
							</Info>
						</ContentContainer>
					</BlogPost>
					<BlogPost className='blog-slide'>
						<Image
							src='/shopse.png'
							layout='responsive'
							width={360}
							height={200}
							objectFit='cover'
						></Image>

						<ContentContainer>
							<BlogTitle>
								How Did I start Learning Web development, and Why?
							</BlogTitle>
							<BlogShortDescription>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Deleniti neque quod exercitationem excepturi unde placeat
								mollitia cupiditate nisi, voluptate aperiam...
							</BlogShortDescription>

							<Info>
								<Author>
									<p>
										<strong>By</strong> Abdallah Abis
									</p>
								</Author>
								<span>31 March 2020</span>
							</Info>
						</ContentContainer>
					</BlogPost>
					<BlogPost className='blog-slide'>
						<Image
							src='/shopse.png'
							layout='responsive'
							width={360}
							height={200}
							objectFit='cover'
						></Image>

						<ContentContainer>
							<BlogTitle>
								How Did I start Learning Web development, and Why?
							</BlogTitle>
							<BlogShortDescription>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Deleniti neque quod exercitationem excepturi unde placeat
								mollitia cupiditate nisi, voluptate aperiam...
							</BlogShortDescription>

							<Info>
								<Author>
									<p>
										<strong>By</strong> Abdallah Abis
									</p>
								</Author>
								<span>31 March 2020</span>
							</Info>
						</ContentContainer>
					</BlogPost>
				</InnerContainer>
			</OuterContainer>
		</Container>
	);
};

export default Blog;
