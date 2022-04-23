import { useState, useEffect } from "react";
import axios from "axios";
import {
    TodaysPlant,
    ImgCard,
    PostCard,
    Header,
    Footer,
} from "../../components/index";
import {
    Main,
    PostContentsWrapper,
    Title,
    PostCardBox,
    StyledLink,
} from "./Home.style";

export default function Home() {
    const [famousPosts, setFamousPosts] = useState([]);
    useEffect(async () => {
        const response = await axios.get("/main");
        const { manyHitsPlants } = await response.data;
        setFamousPosts(manyHitsPlants);
    }, []);

    return (
        <>
            {/* <HeadInfo title="초록친구 헤헤" /> */}
            <Header />
            <Main>
                {/* {plantData && (
                  <TodaysPlant
                      imgUrl={plantData.imgUrl}
                      content={plantData.content}
                      postId={plantData.postId}
                  />
              )} */}
                <TodaysPlant imgUrl="img/plant.png" content="hey" postId={3} />

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
