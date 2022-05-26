import { useState } from "react";

import { PlantInfoModal } from "../../components/index";
import {
    GridContainer,
    ImageContainer,
    PlantCardWrapper,
    Description
} from "./PlantCard.style";

export default function PlantCard({ data }) {
    const [infoModalOpen, setInfoModalOpen] = useState(false);
    const [selectedPlant, setSelectedPlant] = useState({});

    return (
        <GridContainer>
            {data.map((plant) => {
                return (
                    <PlantCardWrapper
                        key={plant._id}
                        onClick={() => {
                            setDetailOpen(true);
                            setSelectedPlant({ ...selectedPlant, ...plant });
                        }}
                    >
                        <ImageContainer>
                            <img
                                src={`http://www.nongsaro.go.kr/${plant.fileRoute}/${plant.thumbnailFileName[0]}`}
                                alt={plant.plantName}
                            />
                        </ImageContainer>
                        <Description>
                            <h3>{plant.plantName}</h3>
                            <p className="description">
                                {plant.functionalInfo
                                    ? plant.functionalInfo
                                    : plant.specialManage}
                            </p>
                            <p className="origin">원산지: {plant.originInfo}</p>
                        </Description>
                    </PlantCardWrapper>
                );
            })}
            {infoModalOpen && (
                <PlantInfoModal
                    onClose={setDetailOpen}
                    plant_info={selectedPlant}
                />
            )}
        </GridContainer>
    );
}
