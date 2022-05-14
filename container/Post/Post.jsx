import { useState } from "react";
import {
    PostTextarea,
    DisplayImg,
    CotentAddBar,
    PostTitle,
    RemoveBtn,
    ContentSection,
    PostFormWrapper,
    PostWrapper
} from "./Post.style";

import { Header } from "../../components/index";
import axios from "axios";

// # 제출된 파일이 화면에 보이도록 하기
// - [x] post 페이지로 접속했을 때 초기화면은 기본 ContentSection
// - [x] 파일을 등록하면 inputList에 반영
// - [x] 포스트 삭제 버튼
// - [ ] 다시 랜더링으로 그려주기

// - # formData로 전송할 파일 만들기
// - [ ] 올리기 버튼 만들기

export default function Post() {
    const [title, setTitle] = useState("");
    const [isinitalImgExist, setIsInitalImgExist] = useState(false);
    const [inputList, setInputList] = useState([
        {
            postImageUrl: "",
            content: ""
        }
    ]);

    // const postFormData = (inputFile) => {
    //     const formData = new FormData();
    //     formData.append("imageFile", inputFile);
    //     return axios
    //         .post("/api/image", formData, {
    //             headers: {
    //                 "Content-Type": "multipart/form-data"
    //             }
    //         })
    //         .then((response) => response.data);
    // };

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
    };

    const handleInputChange = (e) => {
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append("imageFile", file);
        console.log(e.target);
        axios
            .post("/api/image", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then((response) => {
                const { imageUrl } = response.data;
                let list = [...inputList];
                let index = e.target.id;
                list[index].postImageUrl = imageUrl;
                setInputList(list);
                if (index == 0 && inputList.length === 1) {
                    setIsInitalImgExist(true);
                }
            })
            .catch((error) => console.log(error));
    };

    const handleContentAddButton = (e) => {
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append("imageFile", file);
        axios
            .post("/api/image", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then((response) => {
                const { imageUrl } = response.data;
                let list = [...inputList];
                list.push({
                    postImageUrl: imageUrl,
                    content: ""
                });
                setInputList(list);

                const formData = new FormData();
                const file = e.target.files[0];
                formData.append("imageFile", file);
            })
            .catch((error) => console.log(error));
    };

    const handleTextAreaBlur = (e) => {
        let list = [...inputList];
        let index = e.target.id;
        list[index].content = e.target.value;
        setInputList(list);
    };

    return (
        <PostWrapper>
            <Header id="post" />
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
                                            onChange={handleInputChange}
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
                            <CotentAddBar initalImgExist>
                                <span>추가하기</span>
                                <input
                                    type="file"
                                    name="fileImage"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={handleContentAddButton}
                                />
                            </CotentAddBar>
                        )}
                    </label>
                </form>
            </PostFormWrapper>
        </PostWrapper>
    );
}
