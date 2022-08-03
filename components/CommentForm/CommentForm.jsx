import axios from "axios";
import { useRef, useState } from "react";
import Router, { useRouter } from "next/router";
import { loginState, userInfoState } from "../../state";
import { useRecoilValue } from "recoil";
import {
    ContentWrapper,
    UserProfileImg,
    CommentSection,
    StyledInput,
    StyledButton
} from "./CommentForm.style";

export default function CommentForm({
    postId,
    layer,
    groupId,
    commentUpdateFunc
}) {
    const isLoggedIn = useRecoilValue(loginState);
    const userInfo = useRecoilValue(userInfoState);
    const [inputText, setinputText] = useState("");
    const router = useRouter();
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        inputRef.current.value = null;
    };

    const handleInputChange = (e) => {
        setinputText(e.target.value);
    };

    const handleButtonClick = () => {
        let requestData = {};
        if (layer === 1) {
            requestData = { content: inputText, layer, groupId };
        } else {
            requestData = { content: inputText, layer };
        }

        axios
            .post(`/api/posts/${postId}/comments`, requestData)
            .then(() => {
                axios.get(`/api/posts/${postId}/comments`).then((response) => {
                    commentUpdateFunc(response.data.comments);
                });
            })
            .catch((err) => {
                if (
                    window.confirm(
                        "재로그인이 필요합니다. 로그인 페이지로 이동합니다."
                    )
                ) {
                    router.push("/signin");
                }
            });
    };

    return (
        <ContentWrapper>
            <UserProfileImg>
                <img
                    src={
                        isLoggedIn ? userInfo.profileImageUrl : "/icon/user.svg"
                    }
                />
            </UserProfileImg>

            <CommentSection>
                <form onSubmit={handleSubmit} id="comment">
                    <StyledInput
                        ref={inputRef}
                        type="text"
                        placeholder="댓글을 입력해주세요 :)"
                        onChange={handleInputChange}
                    ></StyledInput>
                    <StyledButton onClick={handleButtonClick}>
                        등록
                    </StyledButton>
                </form>
            </CommentSection>
        </ContentWrapper>
    );
}
