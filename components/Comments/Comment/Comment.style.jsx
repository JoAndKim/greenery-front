import styled from "styled-components";

export const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 30px;
    padding-left: ${(props) => (props.layer === 1 ? "40px" : "0")};
`;

export const UserProfileImg = styled.div`
    margin-right: 10px;

    img {
        margin-top: 2px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
`;

export const CommentSection = styled.div`
    width: 100%;
    font-size: 14px;
`;

export const CommentContent = styled.div``;

export const CommentDetail = styled.div`
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

export const UserNickName = styled.b`
    margin-right: 5px;
`;
