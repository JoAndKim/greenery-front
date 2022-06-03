import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { loginState, userInfoState } from "../../state";
import { useRouter } from "next/router";
import axios from "axios";
import {
    Main,
    ContentsWrapper,
    Logo,
    Input,
    SubmitButton
} from "./SignIn.style";
import { useState, useRef, useEffect } from "react";

export default function SignIn() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();
    const inputRef = useRef();

    const setLoginState = useSetRecoilState(loginState);
    const setUserInfoState = useSetRecoilState(userInfoState);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleIdChange = (e) => {
        setId(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/api/login/direct", {
                username: id,
                password: password
            })
            .then(function (response) {
                localStorage.setItem("userInfo", JSON.stringify(response.data));
                router.push("/");
                return response.data;
            })
            .then(function (data) {
                setLoginState(true);
                setUserInfoState(data);
            })

            .catch(function (error) {
                alert(
                    "로그인을 완료할 수 없습니다. 아이디와 비밀번호를 다시 한번 확인해 주세요."
                );
            });
    };

    return (
        <Main>
            <ContentsWrapper>
                <Link href="/">
                    <a>
                        <Logo />
                    </a>
                </Link>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="id"
                        placeholder="아이디"
                        onChange={handleIdChange}
                        ref={inputRef}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="비밀번호"
                        onChange={handlePasswordChange}
                    />
                    <SubmitButton type="submit">로그인</SubmitButton>
                </form>
            </ContentsWrapper>
        </Main>
    );
}
