import { useState, useEffect } from "react";
import axios from "axios";
import {
    TodaysPlant,
    ImgCard,
    PostCard,
    Header,
    Footer
} from "../../components/index";
import {
    Main,
    PostContentsWrapper,
    Title,
    PostCardBox,
    StyledLink
} from "./Home.style";

export default function Home() {
    const [famousPosts, setFamousPosts] = useState([]);
    useEffect(async () => {
        const response = await axios.get("/api/main");
        const { manyHitsPlants } = await response.data;
        setFamousPosts(manyHitsPlants);
    }, []);

    return (
        <>
            <Header />
            <Main>
                <TodaysPlant
                    imgUrl="img/todaysplant.jpeg"
                    content="오늘의 초록친구는 김미순님의 '오뚝이' 입니다.**오뚝이는 미순님과 함께 한지 2년된 엔젤스킨종 식물이에요.**담녹빛 잎이 정말 사랑스럽네요!**미순님의 정원이 더 궁금하시다면, "
                    postId={21}
                />

                <PostContentsWrapper>
                    <Title>
                        <span>인기 있는 초록이</span>
                        <StyledLink href="/community">
                            <a>더 많은 초록이들 보기</a>
                        </StyledLink>
                    </Title>
                    <PostCardBox>
                        {famousPosts &&
                            famousPosts.map((card) => (
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
                    </PostCardBox>
                </PostContentsWrapper>
                <ImgCard />
            </Main>
            <Footer />
        </>
    );
}
