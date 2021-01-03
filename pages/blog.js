import Headline from '../components/custom/headline';
import styled from 'styled-components';
import device from '../theme/media';
import Layout from '../components/layout';
import { getContentByPath } from '../lib/queryMarkdown';

const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Title = styled(Headline)`
	font-size: 4rem;
	margin-bottom: 0;

	@media ${device.large} {
		font-size: 5rem;
	}
	@media ${device.large} {
		justify-content: center;
	}
`;
const Blog = ({ navData }) => {
	return (
		<Layout data={navData}>
			<Container>
				<Title>Coming Soon!</Title>
			</Container>
		</Layout>
	);
};

export default Blog;

export async function getStaticProps() {
	const navData = await getContentByPath('navigation');

	return {
		props: {
			navData,
		},
	};
}
