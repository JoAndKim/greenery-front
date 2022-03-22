import Head from "next/head";

export default function HeadInfo({ title }: { title: string }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="반려식물을 죽이지 않고 '잘' 키우고 싶은 사람들을 위한 커뮤니티"
                    key="description"
                />
                <meta property="og:title" content="초록친구" />
                <meta
                    property="og:description"
                    content="반려식물을 죽이지 않고 '잘' 키우고 싶은 사람들을 위한 커뮤니티"
                />
                <meta property="og:image" content="#" />
                <meta property="og:url" content="#" />
            </Head>
        </div>
    );
}

HeadInfo.defaultPorps = {
    title: "초록친구",
};
