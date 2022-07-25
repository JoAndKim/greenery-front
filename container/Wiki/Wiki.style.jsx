import styled from "styled-components";

export const WideContainer = styled.div`
    width: clamp(0px, 100%, 1140px);
    margin: 0 auto;
`;

export const WikiConatiner = styled.main`
    width: 100%;
    margin: 0 auto;
    margin-top: 100px;
    padding: 30px 0;
`;

export const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: end;
    margin: 13px 0 33px 0;
`;

export const ResetButton = styled.input`
    background: var(--primary);
    color: var(--highlight-text);
    padding: 7px 14px;
    min-width: 60px;
    border-radius: 3px;
    border: 0;
    cursor: pointer;
    font-size: 1rem;
`;
