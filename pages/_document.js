import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />)
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Serif+KR:wght@200;600;700&family=Roboto:wght@300;500;700&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="shortcut icon" href="/favicon.svg" />

                    <meta
                        property="og:title"
                        content="초록친구 바로가기"
                        key="greenery_title"
                    />
                    <meta
                        property="og:description"
                        content="반려식물을 죽이지 않고 '잘' 기르고 싶은 사람들을 위한 서비스"
                        key="greenery_description"
                    />
                    <meta
                        property="og:image"
                        content="#"
                        key="greenery_image"
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
