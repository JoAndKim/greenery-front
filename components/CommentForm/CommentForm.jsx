import {
    ContentWrapper,
    UserProfileImg,
    CommentSection,
    StyledInput,
    StyledButton
} from "./CommentForm.style";

export default function CommentForm() {
    return (
        <ContentWrapper>
            <UserProfileImg>
                <img src="/img/plant.png"></img>
            </UserProfileImg>
            <CommentSection>
                <StyledInput placeholder="댓글을 입력해주세요 :)"></StyledInput>
                <StyledButton>등록</StyledButton>
            </CommentSection>
        </ContentWrapper>
    );
}
