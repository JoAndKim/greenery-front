import { useState, useEffect, useRef } from "react";
import { Main, PostArticleWrapper, CommentSection } from "./Article.style";
import axios from "axios";
import { useRouter } from "next/router";
import { setAxiosDefaultAccessToken } from "../../utils/index";
import {
    Header,
    SideBar,
    PostArticle,
    CommentForm,
    Comments,
    Footer
} from "../../components/index";

export default function Article() {
    const [postData, setPostData] = useState({});
    const router = useRouter();
    const commentRef = useRef();

    const { id, title, likes, likeStatus, postContents, regDate, user } =
        postData;

    const [isPostLiked, setIsPostLiked] = useState(likeStatus);

    useEffect(async () => {
        if (!router.isReady) return;
        const postId = await router.query.id;
        const response = await axios.get(`/api/posts/${postId}`);
        const { data } = response;
        setPostData(data);
        const store = localStorage.getItem("userInfo");
        setAxiosDefaultAccessToken(JSON.parse(store));
    }, [router.isReady]);

    const handleLikeClick = () => {
        axios.post(`/api/posts/${id}/likes`).then(() => {
            setIsPostLiked(true);
        });
    };

    const handleCommentClick = () => {
        commentRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };

    const handleTrashClick = () => {
        axios
            .delete(`/api/posts/${id}`)
            .then(() => {
                alert(
                    "글 삭제가 완료되었습니다. 커뮤니티 페이지로 이동합니다."
                );
                router.push("/community");
            })
            .catch((err) => {
                if (
                    window.confirm(
                        "글 삭제 권한이 없습니다. 로그인 페이지로 이동합니다."
                    )
                ) {
                    router.push("/signin");
                }
            });
    };

    const handleUpdateClick = () => {
        router.push({ pathname: "/post", query: { mode: "edit", postId: id } });
    };

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
                    isPostLiked={isPostLiked}
                    likeHandler={handleLikeClick}
                    commentHandler={handleCommentClick}
                    trashHandler={handleTrashClick}
                    updateHandler={handleUpdateClick}
                />
                <CommentSection>
                    <h2 ref={commentRef}>댓글</h2>
                    <CommentForm />
                    <Comments postId={id} />
                </CommentSection>
            </PostArticleWrapper>
            <Footer />
        </Main>
    );
}
