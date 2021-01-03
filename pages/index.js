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

export async function getStaticProps() {
	const navData = await getContentByPath('navigation');
	const headerData = await getContentByPath('header');
	const testimonialsData = await getContentByPath('testimonials');
	const aboutData = await getContentByPath('about');
	const workData = await getContentByPath('work');
	const contactData = await getContentByPath('contact');
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
