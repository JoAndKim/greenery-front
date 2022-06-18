import { useState } from "react";
import styled from "styled-components";
import CommentForm from "../CommentForm/CommentForm";
const ContentWrapper = styled.div`
    display: flex;
    margin-bottom: 30px;
`;
const UserProfileImg = styled.div`
    margin-right: 10px;

    img {
        margin-top: 2px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
`;
const CommentSection = styled.div`
    font-size: 14px;
`;
const CommentContent = styled.div``;
const CommentDetail = styled.div`
    margin-top: 2px;
    span {
        color: var(--lighter-text);
    }
    .light {
        font-weight: 400;
    }
    .bold {
        font-weight: 700;
        cursor: pointer;
    }
`;
const UserNickName = styled.b`
    margin-right: 5px;
`;

const dummy = {
    id: 1,
    groupId: 1,
    postId: 1,
    layer: 0,
    user: {
        id: 1,
        profileImageUrl: "http://s3.aws.com/das.jpg",
        nickname: "dongkyu"
    },
    content: "안녕하세요 식물 이쁘네요",
    regDate: "2022-03-20 12:13:00"
};

// parameter : { content, layer, user, regDate }
export default function Comment() {
    const [activeReply, setActiveReply] = useState(false);
    const ActiveReply = () => {
        setActiveReply((prev) => !prev);
    };
    const layers = 1;

    return (
        <ContentWrapper>
            <UserProfileImg>
                <img src="/img/plant.png"></img>
            </UserProfileImg>
            <CommentSection>
                <CommentContent>
                    <UserNickName>앨리스</UserNickName>우리 초록이는 정말
                    이뻐요. 하하하 우리 초록이는 정말 이뻐요. 하하하 우리
                    초록이는 정말 이뻐요. 하하하 우리 초록이는 정말 이뻐요.
                    하하하
                </CommentContent>
                <CommentDetail>
                    <span className="light">1년 전</span>ㆍ
                    {layers === 1 && (
                        <span className="bold" onClick={ActiveReply}>
                            답글달기
                        </span>
                    )}
                    {activeReply && <CommentForm />}
                </CommentDetail>
            </CommentSection>
        </ContentWrapper>
    );
}
