import {
    ContentWrapper,
    UserProfileImg,
    CommentSection,
    StyledInput,
    StyledButton
} from "./CommentForm.style";

export default function CommentForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    };

    return (
        <ContentWrapper>
            <UserProfileImg>
                <img src="/img/plant.png"></img>
            </UserProfileImg>

            <CommentSection>
                <form onSubmit={handleSubmit}>
                    <StyledInput placeholder="댓글을 입력해주세요 :)"></StyledInput>
                    <StyledButton>등록</StyledButton>
                </form>
            </CommentSection>
        </ContentWrapper>
    );
}
