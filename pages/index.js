import About from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';
import Testimonials from '../components/testimonials';
import Work from '../components/work';
import { getContentByPath } from '../lib/queryMarkdown';

const IndexPage = ({
	navData,
	headerData,
	aboutData,
	workData,
	testimonialsData,
	contactData,
}) => {
	return (
		<Layout data={navData}>
			<Header data={headerData} />
			<About data={aboutData} />
			<Work data={workData} />
			<Testimonials data={testimonialsData} />
			<Contact data={contactData} />
			<Footer />
		</Layout>
	);
};

export default IndexPage;

// this will retrieve content for each individual section
export async function getStaticProps() {
	// getContentByPath is accepting one argument which is the name of the folder that holds the content of the section
	const navData = await getContentByPath('navigation');
	const headerData = await getContentByPath('header');
	const testimonialsData = await getContentByPath('testimonials');
	const aboutData = await getContentByPath('about');
	const workData = await getContentByPath('work');
	const contactData = await getContentByPath('contact');

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
