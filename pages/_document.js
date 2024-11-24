import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Unica+One&display=swap"
          rel="stylesheet"
        />
        {/* Updated icons */}
        <link
          rel="apple-touch-icon"
          sizes="16x16"
          href="/favicon/icons8-monster-color-16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="32x32"
          href="/favicon/icons8-monster-color-32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/icons8-monster-color-60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="70x70"
          href="/favicon/icons8-monster-color-70.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/icons8-monster-color-72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/icons8-monster-color-76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="96x96"
          href="/favicon/icons8-monster-color-96.png"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/icons8-monster-color-32.png"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/icons8-monster-color-96.png"
        />
        <link
          rel="manifest"
          href="/favicon/manifest.json"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/icons8-monster-color-70.png"
        />
        <meta name="theme-color" content="#111" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
