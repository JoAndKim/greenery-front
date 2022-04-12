import Link from "next/link";
import {
    Main,
    ContentsWrapper,
    Logo,
    Input,
    SignInButton,
} from "./SignIn.style";

export default function SignIn() {
    return (
        <Main>
            <ContentsWrapper>
                <Link href="/">
                    <a>
                        <Logo />
                    </a>
                </Link>

                <Input placeholder="아이디" />
                <Input placeholder="비밀번호" />
                <SignInButton>로그인</SignInButton>
            </ContentsWrapper>
        </Main>
    );
}
{
    /* <Item>
<Link href="/community" title="식물추천">
    <a>커뮤니티</a>
</Link>
</Item> */
}
