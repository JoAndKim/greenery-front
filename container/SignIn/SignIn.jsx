import Link from "next/link";
import axios from "axios";
import {
    Main,
    ContentsWrapper,
    Logo,
    Input,
    SubmitButton,
} from "./SignIn.style";
import { useState } from "react";

export default function SignIn() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleIdChange = (e) => {
        setId(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/login/direct", {
                username: id,
                password: password,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
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
