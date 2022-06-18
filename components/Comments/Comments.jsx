import CommentForm from "./CommentForm/CommentForm";
import Comment from "./Comment/Comment";
// Comments 에서 Comment와 CommentForm를 사용
// 이 곳에서 api 사용

export default function Comments() {
    const dummy = {
        comments: [
            [
                {
                    id: 1,
                    groupId: 1,
                    postId: 1,
                    layer: 0,
                    user: {
                        id: 1,
                        profileImageUrl: "http://s3.aws.com/das.jpg",
                        nickname: "dongkyu"
                    },
                    content: "첫번째 댓글",
                    regDate: "2022-03-20 12:13:00"
                },
                {
                    id: 2,
                    groupId: 1,
                    postId: 1,
                    layer: 1,
                    user: {
                        id: 2,
                        profileImageUrl: "http://s3.aws.com/daseqwe.jpg",
                        nickname: "seoyeong"
                    },
                    content: "첫번째 댓글의 대댓글",
                    regDate: "2022-03-20 12:15:00"
                }
            ],
            [
                {
                    id: 3,
                    groupId: 2,
                    postId: 1,
                    layer: 0,
                    user: {
                        id: 1,
                        profileImageUrl: "http://s3.aws.com/das.jpg",
                        nickname: "dongkyu"
                    },
                    content: "두번째 댓글",
                    regDate: "2022-03-20 12:13:00"
                },
                {
                    id: 4,
                    groupId: 2,
                    postId: 1,
                    layer: 1,
                    user: {
                        id: 2,
                        profileImageUrl: "http://s3.aws.com/daseqwe.jpg",
                        nickname: "seoyeong"
                    },
                    content: "두번째 댓글의 대댓글",
                    regDate: "2022-03-20 12:15:00"
                }
            ]
        ]
    };
    return (
        <>
            <h2>댓글</h2>
            <CommentForm></CommentForm>
            {dummy.comments.map((group) => {
                console.log(group);
            })}
        </>
    );
}
