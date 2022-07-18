import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { Survey, StyledButton, PlantGrid } from "../../components/index";
import {
    Modal,
    CenterContainer,
    Header,
    IntroContainer,
    CloseButton,
    Nav,
    ButtonCotainer,
    WideContainer
} from "./Recommendation.style";

export default function Recommendation() {
    const [phase, setPhase] = useState(0);
    const [plantData, setPlantData] = useState([]);
    const router = useRouter();
    const [filter, setFilter] = useState({
        group: null,
        brightness: null,
        competence: null
    });

    const isDataFilled = (obj) => {
        const target = Object.values(obj);
        for (let i = 0; i < target.length; i++) {
            if (target[i] === null) return false;
        }
        return true;
    };

    useEffect(() => {
        if (isDataFilled(filter)) {
            const { group, brightness, competence } = filter;
            const fetchingUrl = `api/plants?group=${group}&brightness=${brightness}&competence=${competence}`;
            axios.get(fetchingUrl).then(function (response) {
                setPlantData(response.data.slice(0, 4));
            });
        }
    }, [filter]);

    const addAnswerToFilter = (type, answer) => {
        const newData = { ...filter };
        newData[type] = answer;
        setFilter(newData);
    };

    const moveToNextPhase = () => {
        setPhase((prev) => prev + 1);
    };

    const navigateIntoMain = () => {
        router.push("/");
    };

    const reset = () => {
        setPhase(0);
        setFilter({
            group: null,
            brightness: null,
            competence: null
        });
    };
    let element;
    if (phase === 0) {
        element = (
            <IntroContainer>
                <Header>
                    <h1>
                        <span className="green">초록친구</span>가,
                    </h1>
                    <h1>딱 맞는 초록이를 추천해 드릴게요 :)</h1>
                    <h1>
                        그럼 초록이를 찾으러 가볼까요?
                        <span className="small"> (*약 2분 소요)</span>
                    </h1>
                </Header>
                <ButtonCotainer>
                    <StyledButton handleClick={moveToNextPhase}>
                        시작하기
                    </StyledButton>
                </ButtonCotainer>
            </IntroContainer>
        );
    } else if (1 <= phase && phase <= 4) {
        element = (
            <Survey
                phase={phase}
                setPhase={setPhase}
                answers={filter}
                addAnswerToFilter={addAnswerToFilter}
            />
        );
    } else {
        element = (
            <>
                <Header isFinalPage>
                    <img src="img/logo.svg" alt="logo" />
                    <h1>함께하길 기다리는 초록이</h1>
                </Header>
                <Nav>
                    <Link href="/community">
                        <a>더 많은 초록이들 보기</a>
                    </Link>
                </Nav>
                {plantData && <PlantGrid data={plantData} />}
                <ButtonCotainer>
                    <StyledButton handleClick={reset}>다시하기</StyledButton>
                </ButtonCotainer>
            </>
        );
    }

    return (
        <Modal>
            <CloseButton onClick={navigateIntoMain}>
                <img src="icon/close.svg" alt="Close icon" />
            </CloseButton>

            <WideContainer>
                <CenterContainer>{element}</CenterContainer>
            </WideContainer>
        </Modal>
    );
}
