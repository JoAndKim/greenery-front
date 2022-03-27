import Link from "next/link";
import {
    PostCardArticle,
    ImgWrapper,
    ContentBox,
    Profile,
    Like,
} from "./PostCard.style";

export default function PostCard({ id, imgUrl, title, author, likes }) {
    const { name, profileImg } = author;

    return (
        <PostCardArticle>
            <Link href={`/article/${id}`}>
                <a>
                    <ImgWrapper>
                        <img src={imgUrl} alt="포스트 이미지" />
                    </ImgWrapper>
                    <h3>{title}</h3>
                    <ContentBox>
                        <Profile>
                            <img src={profileImg} alt="프로필 이미지" />
                            <span>{name}</span>
                        </Profile>
                        <Like>
                            {/* <FontAwesomeIcon icon={faThumbsUp} /> */}
                            <span>{likes}</span>
                        </Like>
                    </ContentBox>
                </a>
            </Link>
        </PostCardArticle>
    );
}
