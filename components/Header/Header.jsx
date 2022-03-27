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
} from "./Header.style";
import Link from "next/link";

export default function Header(props) {
    return (
        <HeaderTag>
            <NavigationBarContainer>
                <div>
                    <LogoWrap>
                        <Link href="/">
                            <a>
                                {/* <FormLogo src="/img/logo.svg" alt="home_logo" /> */}

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
                    {/* <UserNavigationWrap onBlur={(e) => blurHandler(e)}>
                        {props.id === "PostPage" ? (
                            <PostButton form="PostFormSubmit">
                                올리기
                            </PostButton>
                        ) : (
                            <UserNavButton onClick={focusHandler}>
                                <HamburgIconWrap>
                                    <img
                                        src="/icon/hamburger.svg"
                                        alt="hamburger"
                                    />
                                </HamburgIconWrap>
                                <UserIconWrap>
                                    <img
                                        src={"/icon/user.svg"}
                                        alt="usericon"
                                    />
                                </UserIconWrap>
                            </UserNavButton>
                        )}
                        {isDropDown && <HeaderDropDown />}
                    </UserNavigationWrap> */}
                </LayoutNavigationRight>
            </NavigationBarContainer>
        </HeaderTag>
    );
}
