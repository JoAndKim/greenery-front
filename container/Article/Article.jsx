import { useState, useEffect } from "react";
import { Main, PostArticleWrapper } from "./Article.style";
import axios from "axios";
import { useRouter } from "next/router";
import {
    Header,
    SideBar,
    PostArticle,
    Comments,
    Footer
} from "../../components/index";

export default function Article() {
    const [postData, setPostData] = useState({});
    const router = useRouter();

    useEffect(async () => {
        if (!router.isReady) return;
        const postId = await router.query.id;
        const response = await axios.get(`/api/posts/${postId}`);
        const { data } = response;
        setPostData(data);
    }, [router.isReady]);

    const { id, title, likes, likeStatus, postContents, regDate, user } =
        postData;

    return (
        <Main>
            <Header />

            <PostArticleWrapper>
                {postData.user && (
                    <PostArticle
                        postId={id}
                        title={title}
                        likes={likes}
                        likeStatus={likeStatus}
                        postContents={postContents}
                        regDate={regDate}
                        profileImgUrl={user.profileImageUrl}
                        username={user.nickname}
                        userId={user.userId}
                    />
                )}

                <SideBar
                    likeHandler
                    commentHandler
                    trashHandler
                    postId
                    updateHandler
                    userId
                    PostUserId
                    liked
                />

                <Comments />
            </PostArticleWrapper>
            <Footer />
        </Main>
    );
}
