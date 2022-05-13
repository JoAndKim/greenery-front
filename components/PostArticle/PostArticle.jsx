import {
    ArticleWrapper,
    ArticleTitle,
    PostInfo,
    DetailedInfo,
    Like,
    ContentBox,
    Content
} from "./PostArticle.style";

export default function PostArticle({
    postId,
    title,
    likes,
    likeStatus,
    postContents,
    regDate,
    profileImgUrl,
    username,
    userId
}) {
    return (
        <ArticleWrapper>
            <ArticleTitle>{title}</ArticleTitle>
            <PostInfo>
                <img src={`${profileImgUrl}`} alt="프로필 이미지"></img>
                <DetailedInfo>
                    <p>{username}</p>
                    <div>
                        <p>{regDate}</p>
                        <Like>
                            <img src="/icon/thumbs-up.svg" alt="좋아요 수" />
                            <div>{likes}</div>
                        </Like>
                    </div>
                </DetailedInfo>
            </PostInfo>
            <ContentBox>
                {postContents &&
                    postContents.map((card, index) => (
                        <Content key={`content-${index}`}>
                            <img
                                src={`${card.postImageUrl}`}
                                alt="포스트 이미지"
                            ></img>
                            <p>{card.content}</p>
                        </Content>
                    ))}
            </ContentBox>
        </ArticleWrapper>
    );
}
