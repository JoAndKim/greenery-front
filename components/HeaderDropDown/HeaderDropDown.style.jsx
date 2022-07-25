import styled from "styled-components";

export const ContentWrapper = styled.div`
    background-color: var(--bg);
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50px;
    right: 5px;
    height: 130px;
    width: 230px;

    border-radius: 30px;
    box-shadow: 0px 4px 4px 0px #00000040;
`;

export const StyledLink = styled.a`
    display: flex;
    align-items: center;
    height: 70px;

    & + & {
        border-top: 1px solid var(--gray);
    }

    span {
        font-size: 24px;
        font-weight: 300;
        margin-left: 28px;
    }
`;

export const ColoredSpan = styled.span`
    color: red;
`;
