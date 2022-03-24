import { HeadInfo, ImgCard, PostCard } from "../components/index";
// import ImgCard from "../components/ImgCard";

const dummy = {
    id: 1,
    user: {
        username: "dongkyu",
        profileImageUrl: "/img/post.png",
    },
    title: "제가 키우는 식물이에요!",
    mainImageUrl: "/img/post.png",
    likes: 3,
    hits: 452,
};

const Home = () => {
    return (
        <>
            <HeadInfo title="초록친구" />
        </>
    );
};

export default Home;
