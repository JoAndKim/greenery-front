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
    display: block;
    margin: 0 auto;
    margin-bottom: 30px;
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

    &:focus {
        outline: none;
        box-shadow: 0 0 1px 1px var(--primary);
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

    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`;

export const StyledSpan = styled.span`
    color: var(--lighter-text);
    font-size: 14px;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5px;
`;
