import { Html, Head, Main, NextScript } from 'next/document'
import { initializeTheme } from '@/lib/theme'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${initializeTheme.toString()})()`,
          }}
        />
        {/* Adobe Typekit font */}
        <link rel="stylesheet" href="https://use.typekit.net/nbe3crr.css" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />

        {/* Favicon (optional, if needed) */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
