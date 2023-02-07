// This custom Component is used to inject things that are the same for all pages in the head.
import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { blockingSetInitialColorMode } from "../lib/handleTheme";

export default function Document({ styleTags }) {
  return (
    <Html lang="en">
      <Head>{styleTags}</Head>
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
