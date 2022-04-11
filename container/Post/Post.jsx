import { useState } from "react";
import {
    PostTextarea,
    DisplayImg,
    CotentAddBar,
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
    const [isinitalImgExist, setIsInitalImgExist] = useState(false);
    const [inputList, setInputList] = useState([
        {
            postImageUrl: "",
            content: "",
        },
    ]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleRemoveClick = (e) => {
        let list = [...inputList];
        let index = e.currentTarget.id;
        if (index == 0 && inputList.length === 1) {
            list[0].postImageUrl = "";
            list[0].content = "";
            setInputList(list);
            setIsInitalImgExist(false);
            e.preventDefault();
            return;
        }
        list.splice(index, 1);
        setInputList(list);
        console.log("hey");
    };

    const handleInputFileChange = (e) => {
        let uploadedFile = e.target.files[0];
        let list = [...inputList];
        let index = e.target.id;
    };

    const initialImgUpload = (e) => {
        let uploadedFile = e.target.files[0];
        let list = [...inputList];
        let index = e.target.id;
        list[index].postImageUrl = URL.createObjectURL(uploadedFile);
        setInputList(list);
        setIsInitalImgExist(true);
    };

    const handleContentAddButton = (e) => {
        e.preventDefault();
        let uploadedFileURL = URL.createObjectURL(e.target.files[0]);
        setInputList([
            ...inputList,
            { postImageUrl: uploadedFileURL, content: "" },
        ]);
    };

    const handleTextAreaBlur = (e) => {
        let list = [...inputList];
        let index = e.target.id;
        list[index].content = e.target.value;
        setInputList(list);
    };

    return (
        <PostWrapper>
            <Header />
            <PostFormWrapper>
                <PostTitle
                    placeholder="제목을 입력해주세요."
                    onChange={handleTitleChange}
                />

                <form>
                    {inputList.map((list, index) => {
                        return (
                            <ContentSection key={index}>
                                <label>
                                    {!isinitalImgExist && (
                                        <input
                                            id={index}
                                            type="file"
                                            name="fileImage"
                                            accept="image/*"
                                            style={{ display: "none" }}
                                            onChange={initialImgUpload}
                                        />
                                    )}

                                    <DisplayImg
                                        src={
                                            list.postImageUrl ||
                                            "/img/upload.png"
                                        }
                                        alt="업로드 이미지"
                                    />

                                    {isinitalImgExist && (
                                        <RemoveBtn
                                            id={index}
                                            onClick={handleRemoveClick}
                                        >
                                            <img
                                                src="/icon/postTrash.svg"
                                                alt="사진 이미지 버리기"
                                            />
                                        </RemoveBtn>
                                    )}
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

                <form>
                    <label>
                        {isinitalImgExist && (
                            <CotentAddBar
                                initalImgExist
                                onChange={handleContentAddButton}
                            >
                                <span>추가하기</span>
                                <input
                                    type="file"
                                    style={{ display: "none" }}
                                />
                            </CotentAddBar>
                        )}
                    </label>
                </form>
            </PostFormWrapper>
        </PostWrapper>
    );
}
