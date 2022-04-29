import Link from "next/link";
import axios from "axios";
import { Header, PostCard, Footer } from "../../components/index";
import {
    Main,
    ContentsWrapper,
    PostButtonWrapper,
    SearchInput,
    WideContainer,
} from "./Community.style";
import { useState, useEffect } from "react";

export default function Community() {
    const [posts, setPosts] = useState();
    useEffect(async () => {
        const response = await axios.get("/api/posts");
        setPosts(response.data.posts);
    }, []);

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
                        {posts &&
                            posts.map(
                                ({
                                    id,
                                    mainImageUrl,
                                    title,
                                    user,
                                    likes,
                                    hits,
                                }) => {
                                    return (
                                        <PostCard
                                            id={id}
                                            key={id}
                                            mainImageUrl={mainImageUrl}
                                            title={title}
                                            user={user}
                                            likes={likes}
                                            hits={hits}
                                        ></PostCard>
                                    );
                                }
                            )}
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
