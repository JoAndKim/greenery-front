import styled from "styled-components";

export const HeaderTag = styled.header`
    background: white;
    border-bottom: 1px solid #e5e5e5;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2000;
    padding: 0 10px;
`;

export const NavigationBarContainer = styled.div`
    box-sizing: border-box;
    max-width: 1150px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 60px;

    @media (min-width: 768px) {
        height: 90px;
    }
`;

export const LayoutNavigationMenu = styled.nav`
    margin-left: 70px;
    flex: none;

    @media (max-width: 768px) {
        margin-left: 20px;
    }
`;
export const LayoutNavigationRight = styled.nav`
    position: relative;
    justify-self: right;
    margin-left: auto;
`;

export const MenuItems = styled.ul`
    list-style: none;
    display: flex;
    padding-left: 0px;

    li {
        margin-right: 25px;
    }
    a {
        text-decoration: none;
        color: var(--text);
        font-size: 1.1rem;
    }

    @media (max-width: 768px) {
        li {
            margin-right: 15px;
        }
        a {
            font-size: 0.85rem;
        }
    }
`;

export const UserNavButton = styled.button`
    height: 40px;
    padding: 0;
    background: #ffffff;
    border: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;

    @media (min-width: 768px) {
        width: 80px;
        border: 1px solid #eaeaea;
        box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
    }
`;

export const PostButton = styled.button`
    min-width: 60px;
    font-weight: bold;
    color: var(--highlight-text);
    background: var(--primary);
    border: none;
    padding: 5px 15px;
    border-radius: 4px;
    font-size: 0.9rem;
    cursor: pointer;

    @media (min-width: 768px) {
        border-radius: 5px;
        font-size: 1rem;
        padding: 10px 30px;
    }
`;

export const HamburgIconWrap = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: block;
        width: 16px;
        height: 16px;

        img {
            width: 100%;
            height: 100%;
        }
    }
`;

export const UserIconWrap = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const LogoWrap = styled.div`
    text-align: center;
`;

export const HeaderLogo = styled.img`
    vertical-align: bottom;
    content: url("/img/favicon.svg");

    @media (min-width: 768px) {
        content: url("/img/logo.svg");
    }
`;

export const FormLogo = styled.img`
    vertical-align: bottom;
`;

export const Item = styled.li`
    font-weight: bold;

    a {
        &:hover {
            color: var(--primary);
        }
    }
    a.active {
        color: var(--primary);
    }
`;

export const UserNavigationWrap = styled.div``;

export const DropDownButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 80px;
    left: 1448px;
    top: 30px;
    border-radius: 90px;
    box-shadow: 0px 4px 4px 0px #00000040;
    border: none;
    background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
        #eaeaea;

    img + img {
        margin-left: 11px;
    }
`;
