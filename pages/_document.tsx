import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your next cover letter in seconds."
          />
          <meta property="og:site_name" content="coverletterai.ai" />
          <meta
            property="og:description"
            content="Generate your next cover letter in seconds."
          />
          <meta property="og:title" content="Cover Letter Generator" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Cover Letter Generator" />
          <meta
            name="twitter:description"
            content="Generate your next cover letter in seconds."
          />
          <meta
            property="og:image"
            content="https://coverletterai.ai/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://coverletterai.ai/og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
