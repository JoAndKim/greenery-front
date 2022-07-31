import { useEffect, useState } from "react";
import { Header } from "../../components/index";
import { useRecoilValue } from "recoil";
import { setAxiosDefaultAccessToken } from "../../utils/index";
import { loginState, userInfoState } from "../../state";
import { PostCard } from "../../components/index";
import {
    ProfileWrapper,
    ProfileImg,
    PostCardsWrapper,
    PostCardborder,
    Nickname,
    MyPost,
    IndexButton
} from "./MyPage.style";
import axios from "axios";

export default function MyPage() {
    const [category, setCategory] = useState("myPosts");
    const isLoggedIn = useRecoilValue(loginState);
    const userInfo = useRecoilValue(userInfoState);

    const [myPosts, setMyposts] = useState();
    const [likedPosts, setLikedPosts] = useState();

    useEffect(() => {
        const store = localStorage.getItem("userInfo");
        setAxiosDefaultAccessToken(JSON.parse(store));
        axios.get("/api/posts/me").then((response) => {
            setMyposts(response.data.posts);
        });
        axios.get("/api/posts/me/likes").then((response) => {
            setLikedPosts(response.data.posts);
        });
    }, []);

    const handleButtonClick = (e) => {
        setCategory(e.target.id);
    };

    return (
        <>
            <Header />
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

                <PostCardsWrapper>
                    {category === "myPosts" &&
                        myPosts?.map((card) => (
                            <PostCard
                                key={card.id}
                                id={card.id}
                                mainImageUrl={card.mainImageUrl}
                                title={card.title}
                                user={card.user}
                                likes={card.likes}
                                hits={card.hits}
                            />
                        ))}
                    {category === "likedPosts" &&
                        likedPosts?.map((card) => (
                            <PostCard
                                key={card.id}
                                id={card.id}
                                mainImageUrl={card.mainImageUrl}
                                title={card.title}
                                user={card.user}
                                likes={card.likes}
                                hits={card.hits}
                            />
                        ))}
                </PostCardsWrapper>
            </ProfileWrapper>
        </>
    );
}
