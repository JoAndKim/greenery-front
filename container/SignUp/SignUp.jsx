import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
    Main,
    ContentsWrapper,
    Logo,
    Label,
    Input,
    FileInput,
    FileInputLabel,
    ProfileImg,
    SubmitButton,
    MemberCheck
} from "./SignUp.style";

export default function SignUp() {
    const [values, setValues] = useState({
        username: "",
        password: "",
        nickname: "",
        profileImageUrl: ""
    });

    const [errorMessage, setErrorMessages] = useState({
        id: "",
        password: "",
        passwordConfirm: "",
        nickname: ""
    });

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { id, password, passwordConfirm, nickname } = errorMessage;
        if (id || password || passwordConfirm || nickname) {
            alert("회원가입을 완료할 수 없습니다.");
            return;
        }
        axios
            .post("/api/signup", {
                username: "kyupid333",
                password: "1234pwpw333",
                nickname: "큐큐",
                profileImageUrl: "https://aws.s3.com/123asd.jpg"
            })
            .then(function (response) {
                alert(
                    "회원가입이 성공적으로 완료되었습니다. 로그인 창으로 이동합니다."
                );
                router.push("/signin");
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const validateId = (e) => {
        setValues({ ...values, username: e.target.value });

        if (e.target.value.length <= 4) {
            setErrorMessages({
                ...errorMessage,
                id: "5-16자의 영문(대·소문자),숫자를 사용하세요."
            });
            return;
        }
        axios
            .get(`/api/signup/validate?username=${e.target.value}`)
            .then(function (response) {
                const { isExistingUsername } = response.data;
                if (isExistingUsername) {
                    setErrorMessages({
                        ...errorMessage,
                        id: "이미 존재하는 아이디입니다."
                    });
                    return;
                }
                setErrorMessages({
                    ...errorMessage,
                    id: ""
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const validatePassword = (e) => {
        setValues({ ...values, password: e.target.value });

        if (e.target.value.length <= 7) {
            setErrorMessages({
                ...errorMessage,
                password: "8-16자의 영문(대소문자),숫자를 사용하세요."
            });
            return;
        }
        setErrorMessages({
            ...errorMessage,
            password: ""
        });
    };

    const validatePasswordConfirm = (e) => {
        if (e.target.value !== values.password) {
            setErrorMessages({
                ...errorMessage,
                passwordConfirm: "비밀번호가 일치하지 않습니다."
            });
            return;
        }
        setErrorMessages({
            ...errorMessage,
            passwordConfirm: ""
        });
    };

    const validateNickName = (e) => {
        setValues({ ...values, nickname: e.target.value });

        axios
            .get(`/api/signup/validate?nickname=${e.target.value}`)
            .then(function (response) {
                const { isExistingNickname } = response.data;
                if (isExistingNickname) {
                    setErrorMessages({
                        ...errorMessage,
                        nickname: "이미 존재하는 닉네임입니다."
                    });
                    return;
                }
                setErrorMessages({
                    ...errorMessage,
                    nickname: ""
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleFileInputChange = (e) => {
        let uploadedFile = e.target.files[0];
        setValues({
            ...values,
            profileImageUrl: URL.createObjectURL(uploadedFile)
        });
        const formData = new FormData();
        formData.append("imageFile", uploadedFile);
        axios
            .post("/api/image", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(function (response) {
                const { imageUrl } = response.data;
                setValues({ ...values, profileImageUrl: imageUrl });
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
                    <Label>
                        아이디
                        <Input
                            type="text"
                            onChange={validateId}
                            minLength="5"
                            maxLength="16"
                            pattern="^[A-Za-z0-9]{5,20}"
                            required
                        ></Input>
                        <span>{errorMessage.id}</span>
                    </Label>
                    <Label>
                        비밀번호
                        <Input
                            type="password"
                            onChange={validatePassword}
                            minLength="8"
                            maxLength="16"
                            pattern="^[A-Za-z0-9]{8,16}"
                            required
                        ></Input>
                        <span>{errorMessage.password}</span>
                    </Label>
                    <Label>
                        비밀번호 확인
                        <Input
                            type="password"
                            onChange={validatePasswordConfirm}
                            required
                        ></Input>
                        <span>{errorMessage.passwordConfirm}</span>
                    </Label>
                    <Label>
                        닉네임
                        <Input type="text" onChange={validateNickName}></Input>
                        <span>{errorMessage.nickname}</span>
                    </Label>
                    <FileInputLabel>
                        프로필 이미지(선택)
                        <FileInput
                            type="file"
                            accept="image/*"
                            name="profile"
                            onChange={handleFileInputChange}
                        ></FileInput>
                        <ProfileImg
                            src={
                                values.profileImageUrl ||
                                "/img/signup_profile.png"
                            }
                        ></ProfileImg>
                    </FileInputLabel>
                    <SubmitButton>가입하기</SubmitButton>
                </form>

                <Link href="/signin">
                    <a>
                        <MemberCheck>이미 가입한 유저신가요?</MemberCheck>
                    </a>
                </Link>
            </ContentsWrapper>
        </Main>
    );
}
