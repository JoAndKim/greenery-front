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

// const dummy = {
//     id: 1,
//     name: "드라세나 콤팩타",
//     imageUrl:
//         "https://huga.s3.ap-northeast-2.amazonaws.com/plantImages/157104560953401_birdfly_b_plants_72850385_400375880916726_3216598378481740737_n.jpg",
//     group: 0,
//     brightness: 0,
//     competence: 0,
//     content:
//         "드라세나 콤팩타는 이름에서 느껴지듯 'Compacta, 밀집되다, 꽉 차있다' 의 의미로 잎의 배열이 촘촘하게 되어있어 얻어진 이름이에요. 잎은 광택이 있고 잎의 길이가 10cm 내외로 다른 드라세나 종에 비해 짧은 편이에요. 줄기와 잎이 위로 자라나는 성질을 지니고 있어요.",
//     technicalName: "Dracaena deremensis 'Virens Compacta'",
//     watering: "한 달 1회",
//     humidity: "40% 이하",
//     illuminance: "양지"
// };

export default function PlantDetail({ plant_info }) {
    const modalRef = useRef();

    useEffect(() => {
        document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = "";
            window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
        };
    }, []);

    // function closeModal() {
    //     onClose(false);
    // }

    // function closeModalByClickOutside(evt) {
    //     if (modalRef.current === evt.target) {
    //         onClose(false);
    //     }
    // }
    return (
        <BlurBackground ref={modalRef}>
            <Modal>
                <CloseButton>
                    <img src="icon/close.svg" alt="Close icon" />
                </CloseButton>
                <DetailContainer>
                    <ImageContainer>
                        <img
                            src={plant_info.imageUrl}
                            alt={plant_info.plantName}
                        />
                    </ImageContainer>
                    <Header>
                        <h1>{plant_info.name}</h1>
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
