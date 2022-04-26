import { useRef } from "react";
import {
    ContentWrapper,
    Form,
    Input,
    CommentsArticle,
    CommentWrapper,
    CommentInfo,
} from "./Comment.style";
import { Comments } from "../index";
const dummy = {
    comments: [
        [
            {
                id: 1,
                groupId: 1,
                postId: 1,
                class: 0,
                user: {
                    id: 1,
                    profileImageUrl: "http://s3.aws.com/das.jpg",
                    nickname: "dongkyu",
                },
                content: "안녕하세요 식물 이쁘네요",
                regDate: "2022-03-20 12:13:00",
            },
            {
                id: 2,
                groupId: 1,
                postId: 1,
                class: 1,
                user: {
                    id: 2,
                    profileImageUrl: "http://s3.aws.com/daseqwe.jpg",
                    nickname: "seoyeong",
                },
                content: "감사합니다!",
                regDate: "2022-03-20 12:15:00",
            },
        ],
        [
            // "groupId" : 2 의 댓글들
        ],
        [
            // "groupId" : 3 의 댓글들
        ],
    ],
};
export default function Comment() {
    // const textRef = useRef();

    // function textResize() {
    //     const obj = textRef.current;
    //     obj.style.height = "0px";
    //     obj.style.height = obj.scrollHeight + "px";
    // }
    return (
        <ContentWrapper>
            <h3>댓글</h3>
            <Form>
                <img src="/img/community.png" alt="프로필 이미지" />
                <Input>
                    <textarea placeholder="댓글을 입력해주세요:)"></textarea>
                    <button>등록</button>
                </Input>
            </Form>
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
                    <Form>
                        <img src="/img/community.png" alt="프로필 이미지" />
                        <Input>
                            <textarea placeholder="댓글을 입력해주세요:)"></textarea>
                            <button>등록</button>
                        </Input>
                    </Form>
                </CommentWrapper>
            </CommentsArticle>
        </ContentWrapper>
    );
}
