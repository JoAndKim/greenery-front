import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.svg" />
                <title>초록친구</title>
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
                <meta property="og:image" content="#" key="greenery_image" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
