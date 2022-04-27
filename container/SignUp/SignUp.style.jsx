import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const ContentsWrapper = styled.div`
    width: 400px;
    height: auto;
`;

export const Logo = styled.img`
    content: url("img/logo.svg");
    display: block;
    margin: 0 auto;
    margin-bottom: 30px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 14px;

    & + & {
        margin-top: 40px;
    }

    input {
        margin-top: 8px;
        width: 100%;
        height: 48px;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 48px;
    font-size: 17px;
    color: var(--lighter-text);
    text-indent: 10px;
    border-radius: 3.5px;
    border: 1px solid var(--gray);

    & + & {
        margin-top: 15px;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 1px 1px var(--primary);
    }
`;

export const FileInput = styled.input`
    display: none;
`;

export const ProfileImg = styled.img`
    content: url("/img/signup_profile.png");
    width: 200px;
    height: 175px;
    margin-top: 15px;
    cursor: pointer;
`;

export const SubmitButton = styled.button`
    width: 100%;
    height: 48px;
    border: none;
    border-radius: 3.5px;
    background-color: var(--primary);
    font-size: 18px;
    font-weight: 700;
    color: var(--highlight-text);
    margin-top: 25px;

    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`;

export const MemberCheck = styled.p`
    height: 50px;
    width: 100%;
    font-size: 12px;
    color: var(--lighter-text);
    margin-top: 14px;
    text-align: center;

    &:hover {
        text-decoration: underline;
    }
`;
