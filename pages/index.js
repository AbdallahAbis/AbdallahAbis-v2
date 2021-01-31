import Head from 'next/head';
import About from '../components/about';
import Contact from '../components/contact';
import Header from '../components/header';
import Layout from '../components/layout/layout';
import Testimonials from '../components/testimonials';
import Work from '../components/work';
import { getContentByPath } from '../lib/queryMarkdown';
import { getImage } from '@plaiceholder/next';
import { getPixelsCSS } from '@plaiceholder/css';

const IndexPage = ({
	navData,
	headerData,
	aboutData,
	workData,
	testimonialsData,
	contactData,
}) => {
	return (
		<>
			<Head>
				<meta
					name='description'
					content="I'm a JAM Stack web developer, currently freelancing full-time on Upwork, I offer money-back guarantee, premium, after-sales service, you..."
				/>
			</Head>
			<Layout data={navData}>
				<Header data={headerData} />
				<About data={aboutData} />
				<Work data={workData} />
				<Testimonials data={testimonialsData} />
				<Contact data={contactData} />
			</Layout>
		</>
	);
};

export default IndexPage;

// this will retrieve content for each individual section
export async function getStaticProps() {
	// getContentByPath is accepting one argument which is the name of the folder that holds the content of the section
	const navData = await getContentByPath('navigation');
	const headerData = await getContentByPath('header');
	const testimonialsData = await getContentByPath('testimonials');
	const pureAboutData = await getContentByPath('about');
	const workData = await getContentByPath('work');
	const contactData = await getContentByPath('contact');

	const imgSrc = pureAboutData?.image;
	const img = await getImage(imgSrc);
	const blurredImage = await getPixelsCSS(img);
	const aboutData = { ...pureAboutData, blurredImage };

	// this props are returned and can be used by the IndexPage
	return {
		props: {
			navData,
			headerData,
			aboutData,
			workData,
			testimonialsData,
			contactData,
		},
	};
}
