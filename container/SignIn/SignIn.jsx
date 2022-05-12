import Link from "next/link";
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
                const { accessToken } = response.data;
                localStorage.setItem("accessToken", accessToken);
                router.push("/");
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
