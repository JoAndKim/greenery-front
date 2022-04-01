import Link from "next/link";
import {
    PostCardArticle,
    ImgWrapper,
    ContentBox,
    Profile,
    PostInfoWrapper,
    PostInfo,
} from "./PostCard.style";

// {
//     "id": 2,
//     "user": {
//       "username": "seoyeong",
//       "profileImageUrl": "https://avatars.githubusercontent.com/u/74144442?v=4"
//     },
//     "title": "제가 좋아하는 식물이에요!",
//     "mainImageUrl": "https://contents.lotteon.com/itemimage/_v000249/LO/15/32/55/97/16/_1/53/25/59/71/7/LO1532559716_1532559717_1.jpg/dims/optimize/dims/resizemc/400x400",
//     "likes": 21,
//     "hits": 3095
//   }

export default function PostCard({
    id,
    mainImageUrl,
    title,
    user,
    likes,
    hits,
}) {
    const { username, profileImageUrl } = user;

    return (
        <PostCardArticle>
            <Link href={`/article/${id}`}>
                <a>
                    <ImgWrapper>
                        <img src={mainImageUrl} alt="포스트 이미지" />
                    </ImgWrapper>
                    <h3>{title}</h3>
                    <ContentBox>
                        <Profile>
                            <img src={profileImageUrl} alt="프로필 이미지" />
                            <span>{username}</span>
                        </Profile>
                        <PostInfoWrapper>
                            <PostInfo>
                                <img
                                    src="/icon/thumbs-up-solid.svg"
                                    alt="좋아요수"
                                    width={10}
                                />
                                <span>{likes}</span>
                            </PostInfo>
                            <PostInfo>
                                <img
                                    src="/icon/eye.svg"
                                    alt="조회수"
                                    width={15}
                                />
                                <span>{hits}</span>
                            </PostInfo>
                        </PostInfoWrapper>
                    </ContentBox>
                </a>
            </Link>
        </PostCardArticle>
    );
}
