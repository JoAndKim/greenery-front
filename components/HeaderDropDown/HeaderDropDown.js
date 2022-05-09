import Link from "next/link";
import { ContentWrapper, StyledLink } from "./HeaderDropDown.style";

export default function HeaderDropDown() {
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
    const afterLoginOptions = [
        {
            title: "마이페이지",
            to: "/mypage"
        },
        {
            title: "로그아웃",
            to: "/"
        }
    ];

    return (
        <ContentWrapper>
            <Link href="/signin">
                <StyledLink>
                    <span>로그인</span>
                </StyledLink>
            </Link>
            <Link href="/signup">
                <StyledLink>
                    <span>회원가입</span>
                </StyledLink>
            </Link>
        </ContentWrapper>
    );
}
