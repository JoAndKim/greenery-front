import Link from "next/link";
import { useState } from "react";
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

const inputs = [
    {
        id: 1,
        type: "text",
        name: "id",
        errorMessage: "dd",
        label: "아이디",
        required: true,
    },
];

export default function SignUp() {
    const [values, setValues] = useState({
        username: "",
        password: "",
        nickname: "",
        profileImageUrl: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    // const handleIdInputChange = (e) => {
    //     setId(e.target.value);
    // };
    // const handlePasswordInputChange = (e) => {
    //     setPassword(e.target.value);
    // };
    // const confirmPassword = (e) => {
    //     console.log(e.target.value === password);
    // };
    // const handleEmailInputChange = (e) => {
    //     setEmail(e.targer.value);
    // };

    // const handleInputChange = (e) => {
    //     let uploadedFile = e.target.files[0];
    //     let list = [...inputList];
    //     let index = e.target.id;
    //     list[index].postImageUrl = URL.createObjectURL(uploadedFile);
    //     setInputList(list);
    //     setIsInitalImgExist(true);
    // };
    const handleFileInputChange = (e) => {
        console.log(e.target.files[0]);
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    console.log(values);
    return (
        <Main>
            <ContentsWrapper>
                <Link href="/">
                    <a>
                        <Logo />
                    </a>
                </Link>
                <form onSubmit={handleSubmit}>
                    {inputs.map((input) => (
                        <Label>
                            {input.label}
                            <Input
                                type={input.type}
                                name={input.name}
                                onChange={onChange}
                            ></Input>
                            <span>{input.errorMessage}</span>
                        </Label>
                    ))}
                    {/* <Label>
                        아이디
                        <Input
                            type="text"
                            onChange={handleIdInputChange}
                        ></Input>
                        <span>hello</span>
                    </Label>
                    <Label>
                        비밀번호
                        <Input
                            type="password"
                            onChange={handlePasswordInputChange}
                        ></Input>
                    </Label>
                    <Label>
                        비밀번호 확인
                        <Input type="password" onBlur={confirmPassword}></Input>
                    </Label>
                    <Label>
                        닉네임
                        <Input
                            type="text"
                            onChange={handleEmailInputChange}
                        ></Input>
                    </Label> */}
                    <Label>
                        프로필 이미지(선택)
                        <FileInput
                            type="file"
                            accept="image/*"
                            onChange={handleFileInputChange}
                        ></FileInput>
                        <ProfileImg></ProfileImg>
                    </Label>
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
