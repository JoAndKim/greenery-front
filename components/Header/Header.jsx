import { useState } from "react";
import Link from "next/link";
import { HeaderDropDown } from "../index";
import { useRecoilValue } from "recoil";
import { loginState, userInfoState } from "../../state";
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

export default function Header(props) {
    const [isDropDown, setIsDropDown] = useState(false);
    const isLoggedIn = useRecoilValue(loginState);
    const userInfo = useRecoilValue(userInfoState);

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
                            <Link href="/recommendation" title="식물추천">
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
                            <UserIconWrap>
                                <img
                                    src={
                                        isLoggedIn
                                            ? userInfo.profileImageUrl
                                            : "/icon/user.svg"
                                    }
                                />
                            </UserIconWrap>
                        </DropDownButton>
                    )}
                    {isDropDown && (
                        <HeaderDropDown
                            loginState={isLoggedIn}
                        ></HeaderDropDown>
                    )}
                </LayoutNavigationRight>
            </NavigationBarContainer>
        </HeaderTag>
    );
}
