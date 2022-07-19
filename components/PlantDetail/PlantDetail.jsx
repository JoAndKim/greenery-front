import { useEffect, useRef } from "react";
import {
    Modal,
    BlurBackground,
    DetailContainer,
    ImageContainer,
    Header,
    Description,
    Footer,
    CloseButton,
    MetaBox
} from "./PlantDetail.style";

export default function PlantDetail({ onClose, plant_info }) {
    const modalRef = useRef();

    // useEffect(() => {
    //     document.body.style.cssText = `
    //   position: fixed;
    //   top: -${window.scrollY}px;
    //   overflow-y: scroll;
    //   width: 100%;`;
    //     return () => {
    //         const scrollY = document.body.style.top;
    //         document.body.style.cssText = "";
    //         window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    //     };
    // }, []);

    function closeModal() {
        onClose(false);
    }

    function closeModalByClickOutside(evt) {
        if (modalRef.current === evt.target) {
            onClose(false);
        }
    }
    return (
        <BlurBackground ref={modalRef} onClick={closeModalByClickOutside}>
            <Modal>
                <CloseButton onClick={closeModal}>
                    <img src="icon/close.svg" alt="Close icon" />
                </CloseButton>
                <DetailContainer>
                    <ImageContainer>
                        <img
                            src={plant_info.imageUrl}
                            alt={`${plant_info.name} 사진`}
                        />
                    </ImageContainer>
                    <Header>
                        <h1>{plant_info.name}</h1>
                        <h4>({plant_info.technicalName})</h4>
                    </Header>
                    <Description>
                        <p>{plant_info.content}</p>
                    </Description>
                    <Footer>
                        <MetaBox>
                            <p>
                                <span>물주는주기 :</span> {plant_info.watering}
                            </p>
                            <p>
                                <span>습도 :</span> {plant_info.humidity}
                            </p>
                            <p>
                                <span>꽃피는 계절 :</span>{" "}
                                {plant_info.illuminance}
                            </p>
                        </MetaBox>
                    </Footer>
                </DetailContainer>
            </Modal>
        </BlurBackground>
    );
}
