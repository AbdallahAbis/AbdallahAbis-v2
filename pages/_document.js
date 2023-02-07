import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";
import { blockingSetInitialColorMode } from "../lib/handleTheme";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();
    // Step 4: Pass styleTags as a prop
    const initialProps = await Document.getInitialProps(ctx);
    console.log(initialProps);
    
    return { ...initialProps, styles: styleTags };
  }

  render() {
    return (
      <Html lang="en">
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
