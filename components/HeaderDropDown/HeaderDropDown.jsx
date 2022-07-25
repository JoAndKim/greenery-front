import Link from "next/link";
import { loginState, userInfoState } from "../../state";
import { useResetRecoilState } from "recoil";
import {
    ContentWrapper,
    StyledLink,
    ColoredSpan
} from "./HeaderDropDown.style";

export default function HeaderDropDown({ isLoggedIn }) {
    const resetUserState = useResetRecoilState(userInfoState);
    const resetLoginState = useResetRecoilState(loginState);

    const beforeLoginOptions = [
        {
            title: "로그인",
            to: "/signin"
        },
        {
            title: "회원가입",
            to: "/signup"
        }
    ];

    const handleLogout = () => {
        resetUserState();
        resetLoginState();
        localStorage.clear();
    };

    return (
        <ContentWrapper>
            {isLoggedIn ? (
                <>
                    <Link href="/mypage">
                        <StyledLink>
                            <span>마이페이지</span>
                        </StyledLink>
                    </Link>
                    <Link href="/signin">
                        <StyledLink onClick={handleLogout}>
                            <ColoredSpan>로그아웃</ColoredSpan>
                        </StyledLink>
                    </Link>
                </>
            ) : (
                beforeLoginOptions.map((item, i) => (
                    <Link key={i} href={item.to}>
                        <StyledLink>
                            <span>{item.title}</span>
                        </StyledLink>
                    </Link>
                ))
            )}
        </ContentWrapper>
    );
}
