import styled from "styled-components";

export const Main = styled.div`
    position: absolute;
    bottom: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const ContentsWrapper = styled.div`
    width: 314px;
    height: auto;
`;

export const Logo = styled.img`
    content: url("img/logo.svg");
    display: block;
    margin: 0 auto;
    margin-bottom: 30px;
`;

export const Input = styled.input`
    width: 100%;
    height: 48px;
    font-size: 17px;
    color: var(--lighter-text);
    padding: 10px;
    & + & {
        margin-top: 15px;
    }

    :focus {
        outline: 2px solid var(--primary);
        border: none;
    }
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

    :hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;
