import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://avatars.githubusercontent.com/u/138872151?s=200&v=4"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://avatars.githubusercontent.com/u/138872151?s=200&v=4"
          />
          <link rel="manifest" href="/static/favicons/manifest.json" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
