import {
    ArticleWrapper,
    ArticleTitle,
    PostInfo,
    DetailedInfo,
    Like,
    ContentBox,
    Content,
} from "./PostArticle.style";

// {
//   "id": 1,
//   "user": {
//       "id": 3,
//       "username": "dongkyu",
//       "profileImageUrl": "http://s3.aws.com/test.jpg"
//   },
//   "title": "좋아하는 식물들",
//   "likes": 56,
//   "likeStatus": true, // 좋아요 상태 (참고: 게스트일 경우 false로 통일)
//   "postContents": [
//       {
//           "postImageUrl": "http://s3.aws.com/hello.jpg",
//           "content": "금방 시들어 버리는 꽃이 아쉬우셨나요? 그렇다면 발코니를 FEJKA 페이카 인조식물과 조화로 채워 초록이 무성한 미니 정원을 만들어보세요."
//       },
//       {
//           "postImageUrl": "http://s3.aws.com/hlhlhlhl.jpg",
//           "content": "양치식물부터 뾰족한 가시가 달린 다육식물, 잎이 달린 다양한 식물까지 가정용 화초를 두면 집안 분위기가 훨씬 아늑해져요"
//       },
//   ],
// "regDate": "2022-11-27",
// }

export default function PostArticle({
    postId,
    user,
    title,
    likes,
    likeStatus,
    postContents,
    regDate,
}) {
    const { id, username, profileImgUrl } = user;

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
                {postContents.map((card, index) => (
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
