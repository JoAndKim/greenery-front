import { useState } from "react";
import { PlantDetail } from "../index";
import {
    GridContainer,
    ImageContainer,
    PlantCard,
    Description
} from "./PlantGrid.style";

export default function PlantGrid({ data }) {
    const [detailOpen, setDetailOpen] = useState(false);
    const [selectedPlant, setSelectedPlant] = useState({});

    return (
        <GridContainer>
            {data.map((plant) => {
                return (
                    <PlantCard
                        key={plant.id}
                        onClick={() => {
                            setDetailOpen(true);
                            setSelectedPlant(plant);
                        }}
                    >
                        <ImageContainer>
                            <img src={plant.imageUrl} alt={plant.name} />
                        </ImageContainer>
                        <Description>
                            <h3>{plant.name}</h3>
                            <p className="origin">{plant.technicalName}</p>
                            <p className="description">{plant.content}</p>
                        </Description>
                    </PlantCard>
                );
            })}
            {detailOpen && (
                <PlantDetail
                    onClose={setDetailOpen}
                    plant_info={selectedPlant}
                />
            )}
        </GridContainer>
    );
}
