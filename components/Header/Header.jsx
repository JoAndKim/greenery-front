import { useState } from "react";
import {
    HeaderTag,
    LayoutNavigationMenu,
    LayoutNavigationRight,
    NavigationBarContainer,
    HamburgIconWrap,
    UserIconWrap,
    MenuItems,
    UserNavButton,
    PostButton,
    LogoWrap,
    HeaderLogo,
    FormLogo,
    Item,
    DropDownButton
} from "./Header.style";
import Link from "next/link";
import { HeaderDropDown } from "../index";

export default function Header(props) {
    const [isDropDown, setIsDropDown] = useState(false);

    const handleButtonClick = () => {
        setIsDropDown(!isDropDown);
    };

    return (
        <HeaderTag>
            <NavigationBarContainer>
                <div>
                    <LogoWrap>
                        <Link href="/">
                            <a>
                                <HeaderLogo alt="home_logo" />
                            </a>
                        </Link>
                    </LogoWrap>
                </div>
                <LayoutNavigationMenu>
                    <MenuItems>
                        <Item>
                            <Link href="/community" title="식물추천">
                                <a>커뮤니티</a>
                            </Link>
                        </Item>
                        <Item>
                            <Link href="/recommedation" title="식물추천">
                                <a>식물추천</a>
                            </Link>
                        </Item>
                        <Item>
                            <Link href="/wiki" title="식물추천">
                                <a>초록위키</a>
                            </Link>
                        </Item>
                    </MenuItems>
                </LayoutNavigationMenu>
                <LayoutNavigationRight>
                    {props.id === "post" ? (
                        <PostButton form="post-form">올리기</PostButton>
                    ) : (
                        <DropDownButton onClick={handleButtonClick}>
                            <img src="/icon/hamburger.svg"></img>
                            <img src="/icon/user.svg"></img>
                        </DropDownButton>
                    )}
                    {isDropDown && <HeaderDropDown></HeaderDropDown>}
                </LayoutNavigationRight>
            </NavigationBarContainer>
        </HeaderTag>
    );
}
