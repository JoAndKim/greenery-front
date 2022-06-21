import { useEffect, useState } from "react";
import { Header } from "../../components/index";
import { useRecoilValue } from "recoil";
import { setAxiosDefaultAccessToken } from "../../utils/index";
import { loginState, userInfoState } from "../../state";
import {
    ProfileWrapper,
    ProfileImg,
    PostCardsWrapper,
    PostCardborder,
    Nickname,
    MyPost,
    IndexButton
} from "./MyPage.style";

export default function MyPage() {
    const [category, setCategory] = useState("myPosts");
    const isLoggedIn = useRecoilValue(loginState);
    const userInfo = useRecoilValue(userInfoState);

    // const [myPosts, setMyposts] = useState;

    useEffect(() => {
        const store = localStorage.getItem("userInfo");
        setAxiosDefaultAccessToken(JSON.parse(store));
    }, []);

    const handleButtonClick = (e) => {
        setCategory(e.target.id);
    };

    return (
        <>
            <Header></Header>
            <ProfileWrapper>
                <ProfileImg>
                    <img
                        src={
                            isLoggedIn
                                ? userInfo.profileImageUrl
                                : "/icon/user.svg"
                        }
                    />
                </ProfileImg>
                <Nickname>
                    {isLoggedIn ? userInfo.nickname : "초록친구"}
                </Nickname>
                <MyPost>
                    <ul>
                        <li>
                            <IndexButton
                                id="myPosts"
                                currentstate={category}
                                onClick={handleButtonClick}
                            >
                                내가 작성한 글
                            </IndexButton>
                            <hr></hr>
                        </li>
                        <li>
                            <IndexButton
                                id="likedPosts"
                                currentstate={category}
                                onClick={handleButtonClick}
                            >
                                좋아요 한 글
                            </IndexButton>
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
