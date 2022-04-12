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
                <Logo />
                <Input placeholder="아이디"></Input>
                <Input placeholder="비밀번호"></Input>
                <SignInButton>로그인</SignInButton>
            </ContentsWrapper>
        </Main>
    );
}
