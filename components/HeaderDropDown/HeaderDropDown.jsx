import Link from "next/link";
import { ContentWrapper, StyledLink } from "./HeaderDropDown.style";

export default function HeaderDropDown({ loginState }) {
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
    const linkOption = loginState ? afterLoginOptions : beforeLoginOptions;

    return (
        <ContentWrapper>
            {linkOption &&
                linkOption.map((item, i) => (
                    <Link key={i} href={item.to}>
                        <StyledLink>
                            <span>{item.title}</span>
                        </StyledLink>
                    </Link>
                ))}
        </ContentWrapper>
    );
}
