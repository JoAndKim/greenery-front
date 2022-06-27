import "../styles/globals.css";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { Layout } from "../components/index";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <RecoilRoot>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </RecoilRoot>
        </>
    );
}

export default MyApp;
