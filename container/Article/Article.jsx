import { Main, PostArticleWrapper } from "./Article.style";
import { Header, SideBar, PostArticle } from "../../components/index";

const dummy = {
    id: 1,
    user: {
        id: 3,
        username: "dongkyu",
        profileImageUrl: "http://s3.aws.com/test.jpg",
    },
    title: "좋아하는 식물들",
    likes: 56,
    likeStatus: true, // 좋아요 상태 (참고: 게스트일 경우 false로 통일)
    postContents: [
        {
            postImageUrl: "http://s3.aws.com/hello.jpg",
            content:
                "금방 시들어 버리는 꽃이 아쉬우셨나요? 그렇다면 발코니를 FEJKA 페이카 인조식물과 조화로 채워 초록이 무성한 미니 정원을 만들어보세요.",
        },
        {
            postImageUrl: "http://s3.aws.com/hlhlhlhl.jpg",
            content:
                "양치식물부터 뾰족한 가시가 달린 다육식물, 잎이 달린 다양한 식물까지 가정용 화초를 두면 집안 분위기가 훨씬 아늑해져요",
        },
    ],
    regDate: "2022-11-27",
};

export default function Article() {
    return (
        <Main>
            <Header />

            <PostArticleWrapper>
                <PostArticle
                    postId={dummy.id}
                    user={dummy.user}
                    title={dummy.title}
                    likes={dummy.likes}
                    likeStatus={dummy.likeStatus}
                    postContents={dummy.postContents}
                    regDate={dummy.regDate}
                />
                {/* 
                {article.author && (
                    <SideBar
                        likeHandler={handleLikeClick}
                        commentHandler={handleCommentClick}
                        trashHandler={handleTrashClick}
                        postId={postId}
                        updateHandler={handleUpdateClick}
                        userId={userProfile.id}
                        PostUserId={article.author}
                        liked={liked}
                    />
            */}
                {/* <div ref={commentRef} />
                <Comment /> */}
            </PostArticleWrapper>
        </Main>
    );
}
