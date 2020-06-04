import Document, { Html, Head, Main, NextScript } from "next/document";

class BYPDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="application-name" content="Build Your Path" />

          <meta name="apple-mobile-web-app-capable" content="yes" />

          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />

          <link rel="manifest" href="/manifest.json" />

          <meta name="apple-mobile-web-app-title" content="Build Your Path" />

          <meta name="format-detection" content="telephone=no" />

          <meta name="mobile-web-app-capable" content="yes" />

          <meta
            name="msapplication-config"
            content="/static/icons/browserconfig.xml"
          />

          <link rel="apple-touch-icon" sizes="180x180" href="/icons/192.png" />

          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />

          <meta name="theme-color" content="#000000" />

          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-166882871-1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-166882871-1', {
              page_path: window.location.pathname,
            });
          `,
            }}
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

export default BYPDocument;
