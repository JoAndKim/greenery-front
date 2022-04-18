import Link from "next/link";
import {
    Main,
    ContentsWrapper,
    Logo,
    Label,
    Input,
    FileInput,
    ProfileImg,
    SubmitButton,
    MemberCheck,
} from "./SignUp.style";

export default function SignUp() {
    return (
        <Main>
            <ContentsWrapper>
                <Link href="/">
                    <a>
                        <Logo />
                    </a>
                </Link>
                <form>
                    <Label>
                        아이디(닉네임)
                        <Input type="text"></Input>
                    </Label>
                    <Label>
                        비밀번호
                        <Input type="password"></Input>
                    </Label>
                    <Label>
                        비밀번호 확인
                        <Input type="password"></Input>
                    </Label>
                    <Label>
                        이메일 주소
                        <Input type="text"></Input>
                    </Label>
                    <Label>
                        프로필 이미지(선택)
                        <FileInput type="file"></FileInput>
                        <ProfileImg></ProfileImg>
                    </Label>
                </form>

                <SubmitButton>가입하기</SubmitButton>
                <Link href="/signin">
                    <a>
                        <MemberCheck>이미 가입한 유저신가요?</MemberCheck>
                    </a>
                </Link>
            </ContentsWrapper>
        </Main>
    );
}
