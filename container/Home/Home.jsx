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
                        {/* {cardData &&
            cardData.posts.map(({ id, imgUrl, title, author, likes }) => (
              <PostCard
                key={id}
                id={id}
                imgUrl={imgUrl}
                title={title}
                author={author}
                likes={likes}
              />
            ))} */}
                        <PostCard
                            id={3}
                            mainImageUrl="img/plant.png"
                            title="함께 한지 2년된 호호노롤종"
                            user={{
                                username: "hey",
                                profileImageUrl: "img/plant.png",
                            }}
                            likes={4876}
                            hits={3095}
                        />
                        <PostCard
                            id={3}
                            mainImageUrl="img/plant.png"
                            title="함께 한지 2년된 호호노롤종"
                            user={{
                                username: "hey",
                                profileImageUrl: "img/plant.png",
                            }}
                            likes={4876}
                            hits={3095}
                        />
                        <PostCard
                            id={3}
                            mainImageUrl="img/plant.png"
                            title="함께 한지 2년된 호호노롤종"
                            user={{
                                username: "hey",
                                profileImageUrl: "img/plant.png",
                            }}
                            likes={4876}
                            hits={3095}
                        />
                    </PostCardBox>
                </PostContentsWrapper>
                <ImgCard />
            </Main>
            <Footer />
        </>
    );
}
