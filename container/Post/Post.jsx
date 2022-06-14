import { useEffect, useState } from "react";
import { Header } from "../../components/index";
import { setAxiosDefaultAccessToken } from "../../utils/index";
import axios from "axios";
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

export default function Post() {
    const [title, setTitle] = useState("");
    const [isinitalImgExist, setIsInitalImgExist] = useState(false);
    const [inputList, setInputList] = useState([
        {
            postImageUrl: "",
            content: ""
        }
    ]);

    useEffect(() => {
        const store = localStorage.getItem("userInfo");
        setAxiosDefaultAccessToken(JSON.parse(store));
    }, []);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const deleteImage = (index) => {
        const target = inputList[index].postImageUrl;
        axios.delete("/api/image", {
            headers: {
                Authorization:
                    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZW95ZW9uZyIsImlhdCI6MTY1MTkwNDk4OSwiZXhwIjoxNjUxOTA2Nzg5fQ.6R8aK8daFCWH2CDvNxzgEglNmTVsvUTAKDPJP5YEJYk"
            },
            data: { imageUrl: target }
        });
    };

    const handleRemoveClick = (e) => {
        let list = [...inputList];
        let index = e.currentTarget.id;
        deleteImage(index);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("글 제목을 입력해주세요.");
            return;
        }
        if (inputList.length === 1 && !inputList[0].postImageUrl) {
            alert("내용을 입력해주세요.");
            return;
        }

        const postData = {
            title,
            postContents: inputList
        };

        axios.post("/api/posts", postData);
    };

    return (
        <PostWrapper>
            <Header id="post" />
            <PostFormWrapper>
                <PostTitle
                    placeholder="제목을 입력해주세요."
                    onChange={handleTitleChange}
                />

                <form onSubmit={handleSubmit} id="post-form">
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
                            <CotentAddBar>
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
