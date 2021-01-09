// This custom Component is used to inject things that are the same for all pages in the head.

import Document, { Html, Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';
import { blockingSetInitialColorMode } from '../lib/handleTheme';

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		// Step 1: Create an instance of ServerStyleSheet
		const sheet = new ServerStyleSheet();

		// Step 2: Retrieve styles from components in the page
		const page = renderPage((App) => (props) =>
			sheet.collectStyles(<App {...props} />)
		);

		// Step 3: Extract the styles as <style> tags
		const styleTags = sheet.getStyleElement();

		// Step 4: Pass styleTags as a prop
		return { ...page, styleTags };
	}

	render() {
		return (
			<Html lang='en'>
				<Head>{this.props.styleTags}</Head>
				<body>
					<script
						dangerouslySetInnerHTML={{
							__html: blockingSetInitialColorMode,
						}}
					></script>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
