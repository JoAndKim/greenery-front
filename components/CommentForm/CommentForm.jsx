import axios from "axios";
import { useState } from "react";
import {
    ContentWrapper,
    UserProfileImg,
    CommentSection,
    StyledInput,
    StyledButton
} from "./CommentForm.style";
// import { setAxiosDefaultAccessToken } from "../../../utils/index";

export default function CommentForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const [inputText, setinputText] = useState("");

    const handleInputHover = () => {
        // const store = localStorage.getItem("userInfo").then();
        // setAxiosDefaultAccessToken(JSON.parse(store));
    };

    const handleInputChange = (e) => {
        setinputText(e.target.value);
    };

    const handleButtonClick = () => {
        axios.post();
    };

    return (
        <ContentWrapper>
            <UserProfileImg>
                <img src="/img/plant.png"></img>
            </UserProfileImg>

            <CommentSection>
                <form onSubmit={handleSubmit} id="comment">
                    <StyledInput
                        type="text"
                        placeholder="댓글을 입력해주세요 :)"
                        onFocus={handleInputHover}
                        onChange={handleInputChange}
                    ></StyledInput>
                    <StyledButton
                        onClick={() => {
                            console.log(inputText);
                        }}
                    >
                        등록
                    </StyledButton>
                </form>
            </CommentSection>
        </ContentWrapper>
    );
}
