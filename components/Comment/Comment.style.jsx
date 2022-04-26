import styled from "styled-components";

export const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 60px auto 100px auto;

    h3 {
        margin: 0 0 30px 0;
        font-size: 18px;
        font-weight: bold;
    }
`;

export const Form = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        object-fit: cover;

        & + div {
            margin-left: 5px;
        }
    }
`;

export const Input = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 680px;
    min-height: 40px;
    padding: 8px 14px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;

    textarea {
        width: calc(100% - 40px);
        height: 20px;
        padding: 0;
        border: none;
        font-size: 16px;
        outline: none;
        resize: none;
        overflow: hidden;
        word-wrap: break-word;
    }

    textarea::placeholder {
        font-size: 16px;
        font-weight: light;
        color: rgba(118, 118, 118, 0.8);
    }

    button {
        padding: 0;
        background-color: white;
        border: none;
        color: rgba(4, 183, 0, 0.8);
        cursor: pointer;
    }
`;

// comments

export const CommentsArticle = styled.article`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 30px;

    & img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        object-fit: cover;

        & + div {
            margin-left: 5px;
        }
    }
`;

export const CommentInfo = styled.div`
    width: 680px;

    & p {
        margin: 0;
        font-size: 14px;
        line-height: 22px;
        overflow: scroll;
    }

    & span {
        font-size: 12px;
        color: rgb(118, 118, 118);
    }

    & button {
        padding: 0;
        border: none;
        background-color: white;
        font-size: 12px;
        color: rgb(118, 118, 118);
        cursor: pointer;
    }
`;
