import "../styles/globals.css";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { Layout } from "../components/index";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <RecoilRoot>
                <Layout>
                    <Head>
                        <title>초록친구</title>
                    </Head>
                    <Component {...pageProps} />
                </Layout>
            </RecoilRoot>
        </>
    );
}

export default MyApp;
