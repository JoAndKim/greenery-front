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
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
`;

export const CommentSection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    border: 1px solid var(--gray);
    border-radius: 5px;
    background: transparent;
`;

export const StyledInput = styled.input`
    font-size: 16px;

    width: 100%;
    border: none;
    padding-left: 20px;
`;

export const StyledButton = styled.button`
    font-size: 16px;

    width: 50px;
    background: none;
    color: var(--primary);
    border: none;
    cursor: pointer;
`;
