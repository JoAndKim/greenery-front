import Link from "next/link";
import {
    Main,
    ContentsWrapper,
    Logo,
    Input,
    SubmitButton,
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

                <Input type="text" placeholder="아이디" />
                <Input type="password" placeholder="비밀번호" />
                <SubmitButton>로그인</SubmitButton>
            </ContentsWrapper>
        </Main>
    );
}
