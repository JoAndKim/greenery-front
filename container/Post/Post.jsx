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

const handleTitleChange = (e) => {
    setTitle(e.target.value);
};

// handle input change
const handleInputChange = (e) => {
    console.log(e.target.files[0]);
    let selectFile = e.target.files[0];
    const file = URL.createObjectURL(selectFile);
    console.log(file);
    // const { name, value } = e.target;
    // const list = [...inputList];

    // if (name === "fileImage") {
    //     list[index][name] = URL.createObjectURL(e.target.files[0]);
    //     list[index].imgUrl = "";
    // } else list[index][name] = value;
    // setInputList(list);
};

// handle click event of the Remove button
const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
};

// handle click event of the Add button
// const handleAddClick = () => {
//     setInputList([...inputList, { content: "", imgUrl: "" }]);
// };

const handleContentAddButton = () => {
    setInputList([...inputList, { postImageUrl: "", content: "" }]);
};

export default function Post() {
    const [title, setTitle] = useState("");
    const [inputList, setInputList] = useState();

    return (
        <PostWrapper>
            <Header></Header>
            <PostFormWrapper>
                <PostTitle
                    placeholder="제목을 입력해주세요."
                    onChange={handleTitleChange}
                />

                <form>
                    <ContentSection>
                        <label>
                            <input
                                // onClick={() => {
                                //     alert("h3llo");
                                // }}
                                type="file"
                                name="fileImage"
                                accept="image/*"
                                // style={{ display: "none" }}
                                onChange={handleInputChange}
                            />
                            <DisplayImg
                                src="/img/upload.png"
                                alt="업로드 이미지"
                            />

                            <RemoveBtn onClick={() => handleRemoveClick(i)}>
                                <img
                                    src="/icon/postTrash.svg"
                                    alt="사진 이미지 버리기"
                                />
                            </RemoveBtn>
                        </label>

                        <PostTextarea
                            name="content"
                            placeholder="내용을 입력하세요."
                        />
                    </ContentSection>
                </form>
                <CotentAddButton onClick={handleContentAddButton}>
                    추가하기
                </CotentAddButton>
                {/* <div>{JSON.stringify(inputList)}</div> */}
            </PostFormWrapper>
        </PostWrapper>
    );
}
