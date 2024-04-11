import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          href='https://api.mapbox.com/mapbox-gl-js/v2.4.1/mapbox-gl.css'
          rel='stylesheet'
        />
      </Head>
      <body className='h-full bg-slate-50 m-auto'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
