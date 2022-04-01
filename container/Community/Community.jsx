import Link from "next/link";

import { Header, PostCard, Footer } from "../../components/index";
import {
    Main,
    ContentsWrapper,
    PostButtonWrapper,
    SearchInput,
    WideContainer,
} from "./Community.style";

export default function Community() {
    return (
        <>
            <Header />
            <Main>
                <WideContainer>
                    <SearchInput>
                        <input
                            // ref={searchRef}
                            type="text"
                            placeholder="검색어를 입력하세요"
                        />
                        <img src="/icon/search.svg" alt="" />
                    </SearchInput>
                    <ContentsWrapper>
                        <PostCard
                            id={3}
                            mainImageUrl="img/plant.png"
                            title="함께 한지 2년된 호호노롤종"
                            user={{
                                username: "hey",
                                profileImageUrl: "img/plant.png",
                            }}
                            likes={4876}
                            hits={3095}
                        />
                        <PostCard
                            id={3}
                            mainImageUrl="img/plant.png"
                            title="함께 한지 2년된 호호노롤종"
                            user={{
                                username: "hey",
                                profileImageUrl: "img/plant.png",
                            }}
                            likes={4876}
                            hits={3095}
                        />
                        <PostCard
                            id={3}
                            mainImageUrl="img/plant.png"
                            title="함께 한지 2년된 호호노롤종"
                            user={{
                                username: "hey",
                                profileImageUrl: "img/plant.png",
                            }}
                            likes={4876}
                            hits={3095}
                        />
                    </ContentsWrapper>
                    <PostButtonWrapper>
                        <Link href="/post">
                            <a>
                                <img
                                    src="/icon/postIcon.png"
                                    alt="글쓰기 버튼"
                                />
                            </a>
                        </Link>
                    </PostButtonWrapper>
                </WideContainer>
            </Main>
            <Footer />
        </>
    );
}
