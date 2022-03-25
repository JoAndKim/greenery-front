import Link from "next/link";
import Img from "next/image";
import css from "styled-jsx/css";

const style = css`
    .postCardArticle {
        display: flex;
        flex-direction: column;
        width: 360px;
    }
    .title {
        margin: 16px 0 10px 10px;
        font-size: 16px;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .imgWrapper {
        position: relative;
        width: 360px;
        height: 240px;
        border-radius: 10px;
        overflow: hidden;
    }
    .imgWrapper img {
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
        -webkit-transition: 0.3s;
        -moz-transition: 0.3s;
        -ms-transition: 0.3s;
        -o-transition: 0.3s;
        transition: 0.3s;
    }
    .imgWrapper img:hover {
        -webkit-transform: scale(1.05);
        -moz-transform: scale(1.05);
        -ms-transform: scale(1.05);
        -o-transform: scale(1.05);
        transform: scale(1.05);
    }
    .contentBox {
        display: flex;
        justify-content: space-between;
        margin-left: 10px;
    }
    .profile {
        display: flex;
        align-items: center;
    }
    .profile img {
        margin-right: 6px;
        border-radius: 100px;
    }
    .profile span {
        margin-bottom: 2px;
        font-size: 14px;
    }
    .profile__content {
        display: flex;
    }
    .profile__content__column {
        align-self: center;
        display: flex;
        align-items: center;
        font-size: 10px;
        color: #767676;
    }
    .profile__content__column + div {
        margin-left: 8px;
    }
    .profile__content__column span {
        margin-left: 3px;
    }
    /* .profile__content__column {
        align-self: center;
    } */
    .round {
        border-radius: 50%;
    }
    .hover:hover {
        transform: scale(1.05);
    }

    .profile__photo {
        border-radius: 50%;
    }
`;

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
        <>
            <section className="postCardArticle">
                <Link href={`/article/${id}`}>
                    <a>
                        <div className="imgWrapper">
                            <Img
                                src={mainImageUrl}
                                alt="포스트 이미지"
                                layout="fill"
                                objectFit="cover"
                                className="hover"
                            />
                        </div>
                        <h3 className="title">{title}</h3>
                        <div className="contentBox">
                            <div className="profile">
                                <Img
                                    src={profileImageUrl}
                                    alt="프로필 이미지"
                                    width="22"
                                    height="22"
                                    className="profile__photo"
                                />
                                <span>{username}</span>
                            </div>
                            <div className="profile__content">
                                <div className="profile__content__column">
                                    <Img
                                        src="/icon/thumbs-up-solid.svg"
                                        width="13"
                                        height="13"
                                    />
                                    <span>{likes}</span>
                                </div>
                                <div className="profile__content__column">
                                    <Img
                                        src="/icon/eye.svg"
                                        width="17"
                                        height="17"
                                    />
                                    <span>{hits}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>
            </section>
            <style jsx>{style}</style>
        </>
    );
}
