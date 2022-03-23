import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx);

    //     return initialProps;
    // }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Serif+KR:wght@200;600;700&family=Roboto:wght@300;500;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="font-sans">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
