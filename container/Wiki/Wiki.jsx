import { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
    Header,
    WikiFilter,
    StyledButton,
    PlantGrid
} from "../../components/index";
import {
    WideContainer,
    WikiConatiner,
    StyledButtonContainer,
    ResetButton
} from "./Wiki.style";

export default function () {
    const [plantData, setPlantData] = useState([]);
    const filterRef = useRef({
        group: null,
        competence: null,
        brightness: null
    });
    const [isResult, setIsResult] = useState(false);

    useEffect(async () => {
        const response = await axios.get("/api/plants");
        setPlantData(response.data);
    }, []);

    const createFetchingUrl = (sortedData) => {
        let fundamentalUrl = "api/plants?";
        sortedData.forEach((target) => {
            if (target[1]) {
                fundamentalUrl += `${target[0]}=${target[1]}&`;
            }
        });
        const resultUrl = fundamentalUrl.slice(0, -1);
        return resultUrl;
    };

    const resetCheckBox = () => {
        setIsResult(false);
        axios.get("api/plants").then((response) => {
            setPlantData(response.data);
        });
        filterRef.current = {
            group: null,
            competence: null,
            brightness: null
        };
    };

    const fetchSortedData = () => {
        const fetchingUrl = createFetchingUrl(
            Object.entries(filterRef.current)
        );
        setIsResult(true);
        axios.get(fetchingUrl).then(function (response) {
            setPlantData(response.data);
        });
    };

    return (
        <>
            <WideContainer>
                <WikiConatiner>
                    <Header />
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                        onReset={resetCheckBox}
                    >
                        <WikiFilter filterRef={filterRef} />
                        <StyledButtonContainer>
                            {isResult ? (
                                <ResetButton type="reset" />
                            ) : (
                                <StyledButton
                                    handleClick={fetchSortedData}
                                >{`식물 조회 >`}</StyledButton>
                            )}
                        </StyledButtonContainer>
                    </form>
                    {plantData ? (
                        <PlantGrid data={plantData}></PlantGrid>
                    ) : (
                        <div>조회된 결과가 없습니다...</div>
                    )}
                </WikiConatiner>
            </WideContainer>
        </>
    );
}
