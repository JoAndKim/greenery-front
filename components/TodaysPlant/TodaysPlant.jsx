import {
    TodaysPlantSection,
    ContentBox,
    TodaysLink
} from "./TodaysPlant.style";

export default function TodaysPlant({ imgUrl, content, postId }) {
    const translateContent = (content) => {
        const newContent = content.split("**");
        return newContent.map((text, i) => {
            return <div key={i}>{text}</div>;
        });
    };
    return (
        <TodaysPlantSection>
            <h3>오늘의 초록이</h3>
            <ContentBox>
                <img src={imgUrl} alt="인기 식물 사진" />
                <div>
                    {translateContent(content)}
                    <TodaysLink href={`/article/${postId}`}>
                        <a>
                            <b>여기</b>
                        </a>
                    </TodaysLink>
                    를 눌러주세요
                </div>
            </ContentBox>
        </TodaysPlantSection>
    );
}
