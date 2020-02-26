import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <link data-n-head="true" rel="stylesheet" href="https://at.alicdn.com/t/font_1098415_r1xb63h27s.css" />
          <script type="text/javascript" src="http://api.map.baidu.com/getscript?v=2.0&ak=OLN50TQTDt9XMMZUMrvBrDWMLGIcfy4D"></script>
          <script src="http://live2d.xl686.com/L2Dwidget.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}