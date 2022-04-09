import { useState } from "react";
import {
    PostTextarea,
    DisplayImg,
    CotentAddButton,
    PostTitle,
    RemoveBtn,
    ContentSection,
    PostFormWrapper,
    PostWrapper,
} from "./Post.style";

import { Header } from "../../components/index";

// # 제출된 파일이 화면에 보이도록 하기
// - [x] post 페이지로 접속했을 때 초기화면은 기본 ContentSection
// - [x] 파일을 등록하면 inputList에 반영
// - [ ] 포스트 삭제 버튼
// - [ ] 다시 랜더링으로 그려주기

// - # formData로 전송할 파일 만들기
// - [ ] 올리기 버튼 만들기

export default function Post() {
    const [title, setTitle] = useState("");
    const [inputList, setInputList] = useState([
        {
            postImageUrl: "/img/upload.png",
            content: "",
        },
    ]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    // const handleRemoveClick = (index) => {
    //     const list = [...inputList];
    //     list.splice(index, 1);
    //     setInputList(list);
    // };

    const handleInputChange = (e) => {
        let uploadedFile = e.target.files[0];
        let list = [...inputList];
        let index = e.target.id;
        list[index].postImageUrl = URL.createObjectURL(uploadedFile);
        setInputList(list);

        // const { name, value } = e.target;
        // const list = [...inputList];

        // if (name === "fileImage") {
        //     list[index][name] = URL.createObjectURL(e.target.files[0]);
        //     list[index].imgUrl = "";
        // } else list[index][name] = value;
        // setInputList(list);
    };

    const handleTextAreaBlur = (e) => {
        let list = [...inputList];
        let index = e.target.id;
        list[index].content = e.target.value;
        setInputList(list);
    };

    const handleContentAddButton = () => {
        setInputList([
            ...inputList,
            { postImageUrl: "/img/upload.png", content: "" },
        ]);
    };

    return (
        <PostWrapper>
            <Header></Header>
            <PostFormWrapper>
                <PostTitle
                    placeholder="제목을 입력해주세요."
                    onChange={handleTitleChange}
                />

                <form>
                    {inputList.map((list, index) => {
                        return (
                            <ContentSection>
                                <label>
                                    <input
                                        id={index}
                                        type="file"
                                        name="fileImage"
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        onChange={handleInputChange}
                                    />
                                    <DisplayImg
                                        src={list.postImageUrl}
                                        alt="업로드 이미지"
                                    />

                                    <RemoveBtn
                                        onClick={() => handleRemoveClick(i)}
                                    >
                                        <img
                                            src="/icon/postTrash.svg"
                                            alt="사진 이미지 버리기"
                                        />
                                    </RemoveBtn>
                                </label>

                                <PostTextarea
                                    id={index}
                                    name="content"
                                    placeholder="내용을 입력하세요."
                                    onBlur={handleTextAreaBlur}
                                />
                            </ContentSection>
                        );
                    })}
                </form>
                <CotentAddButton onClick={handleContentAddButton}>
                    추가하기
                </CotentAddButton>
                {/* <div>{JSON.stringify(inputList)}</div> */}
            </PostFormWrapper>
        </PostWrapper>
    );
}
