import styled from "styled-components";

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 30px 0;
`;

export const UserProfileImg = styled.div`
    margin-right: 10px;

    img {
        margin-top: 6px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
`;

export const CommentSection = styled.div`
    width: 100%;
    form {
        display: flex;
        justify-content: space-between;

        height: 40px;
        border: 1px solid var(--gray);
        border-radius: 5px;
        background: transparent;
    }
`;

export const StyledInput = styled.input`
    font-size: 16px;

    width: 100%;
    border: none;
    padding-left: 20px;

    &:focus {
        outline: 1.5px solid var(--primary);
        border-radius: 5px;
    }
`;

export const StyledButton = styled.button`
    font-size: 16px;

    width: 50px;
    background: none;
    color: var(--primary);
    border: none;
    cursor: pointer;
`;
