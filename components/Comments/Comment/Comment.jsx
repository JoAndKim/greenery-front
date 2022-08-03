import { useState } from "react";
import { CommentForm } from "../../index";
import {
    ContentWrapper,
    UserProfileImg,
    CommentSection,
    CommentContent,
    CommentDetail,
    UserNickName
} from "./Comment.style";

export default function Comment(props) {
    const [activeReply, setActiveReply] = useState(false);
    const ActiveReply = () => {
        setActiveReply((prev) => !prev);
    };

    return (
        <ContentWrapper layer={props.layer}>
            <UserProfileImg>
                <img src={props.user.profileImageUrl}></img>
            </UserProfileImg>
            <CommentSection>
                <CommentContent>
                    <UserNickName>{props.user.nickname}</UserNickName>
                    {props.content}
                </CommentContent>
                <CommentDetail>
                    <span className="light">
                        {props.regDate.substring(0, 10)}
                    </span>
                    {props.layer === 0 && (
                        <span className="bold" onClick={ActiveReply}>
                            {activeReply ? "ㆍ숨기기" : "ㆍ답글달기"}
                        </span>
                    )}
                    {activeReply && (
                        <CommentForm
                            postId={props.postId}
                            layer={1}
                            groupId={props.groupId}
                            commentUpdateFunc={props.commentUpdateFunc}
                        />
                    )}
                </CommentDetail>
            </CommentSection>
        </ContentWrapper>
    );
}
