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

// handle input change
const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];

    if (name === "fileImage") {
        list[index][name] = URL.createObjectURL(e.target.files[0]);
        list[index].imgUrl = "";
    } else list[index][name] = value;
    setInputList(list);
};

// handle click event of the Remove button
const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
};

// handle click event of the Add button
const handleAddClick = () => {
    setInputList([...inputList, { content: "", imgUrl: "" }]);
};

export default function Post() {
    return (
        <PostWrapper>
            <Header></Header>
            <PostFormWrapper>
                <PostTitle placeholder="제목을 입력해주세요." />

                <form id="PostFormSubmit">
                    <ContentSection>
                        <label>
                            <input
                                name="fileImage"
                                accept=".gif, .jpeg, .heic, .png"
                                style={{ display: "none" }}
                            />
                            <DisplayImg
                                src="/img/upload.png"
                                alt="upload.png"
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
                <CotentAddButton onClick={handleAddClick}>
                    추가하기
                </CotentAddButton>
                {/* <div>{JSON.stringify(inputList)}</div> */}
            </PostFormWrapper>
        </PostWrapper>
    );
}
