import { CommentsArticle, CommentWrapper, CommentInfo } from "./Comments.style";
// {
//     id: 1,
//     groupId: 1,
//     postId: 1,
//     class: 0,
//     user: {
//         id: 1,
//         profileImageUrl: "http://s3.aws.com/das.jpg",
//         nickname: "dongkyu",
//     },
//     content: "안녕하세요 식물 이쁘네요",
//     regDate: "2022-03-20 12:13:00",
// },

export default function Comments() {
    return (
        <CommentsArticle>
            <CommentWrapper>
                <img src="/img/community.png" alt="프로필 이미지" />
                <CommentInfo>
                    <p>
                        <strong>what</strong>
                        whattheeaewfadsfsdfasdfasdfas
                    </p>
                    <span>1개월 전</span>

                    <button>
                        · <strong>답글달기</strong>
                    </button>
                </CommentInfo>
            </CommentWrapper>
        </CommentsArticle>
    );
}
