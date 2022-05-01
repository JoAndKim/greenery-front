import Link from "next/link";
import {
    PostCardArticle,
    ImgWrapper,
    ContentBox,
    Profile,
    PostInfoWrapper,
    PostInfo
} from "./PostCard.style";

export default function PostCard({
    id,
    mainImageUrl,
    title,
    user,
    likes,
    hits
}) {
    const { nickname, profileImageUrl } = user;

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
                            <span>{nickname}</span>
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
