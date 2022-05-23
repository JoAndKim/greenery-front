import { useState } from "react";
import { Header } from "../../components/index";
import {
    ProfileWrapper,
    ProfileImg,
    PostCardsWrapper,
    PostCardborder,
    Nickname,
    MyPost
} from "./MyPage.style";

export default function MyPage() {
    const [category, setCategory] = useState("myPosts");

    const handleButtonClick = (e) => {
        setCategory(e.target.id);
    };

    return (
        <>
            <Header></Header>
            <ProfileWrapper>
                <ProfileImg>
                    <img src="/img/community.png" />
                </ProfileImg>
                <Nickname>example</Nickname>
                <MyPost>
                    <ul>
                        <li>
                            <button id="myPosts" onClick={handleButtonClick}>
                                내가 작성한 글
                            </button>
                        </li>
                        <li>
                            <button id="likedPosts" onClick={handleButtonClick}>
                                좋아요 한 글
                            </button>
                        </li>
                    </ul>
                </MyPost>
                <PostCardborder />
                <span>{category}</span>

                <PostCardsWrapper>
                    {/* {category === "myPosts" &&
                        posts.map(
                            ({ id, title, imgUrl, likes, author }, index) => {
                                return (
                                    <PostCard
                                        key={index}
                                        id={id}
                                        imgUrl={imgUrl}
                                        title={title}
                                        author={author}
                                        likes={likes}
                                    />
                                );
                            }
                        )} */}

                    {/* {category === "likedPosts" &&
                        likePosts.map(
                            ({ id, title, imgUrl, likes, author }, index) => {
                                return (
                                    <PostCard
                                        key={index}
                                        id={id}
                                        imgUrl={imgUrl}
                                        title={title}
                                        author={author}
                                        likes={likes}
                                    />
                                );
                            }
                        )} */}

                    {/* <div ref={pageEnd} style={{ position: "hidden" }}></div> */}
                </PostCardsWrapper>
            </ProfileWrapper>
        </>
    );
}
