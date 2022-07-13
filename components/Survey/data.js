const icon_route = "icon/";
export const survey_data = [
    {
        num: 1,
        title: "어떤 종류의 식물을 찾고있나요?",
        subtitle: null,
        type: "group",
        questions: [
            {
                id: 0,
                text: "잎이 예쁘게 피는 식물이면 좋겠어요",
                icon: icon_route + "herb.svg"
            },
            {
                id: 1,
                text: "꽃이나 열매가 열리는 식물이면 좋겠어요",
                icon: icon_route + "sakura.svg"
            },
            {
                id: 2,
                text: "다육식물이면 좋겠어요",
                icon: icon_route + "cactus.svg"
            }
        ]
    },
    {
        num: 2,
        title: "식물을 키워본 경험이 많으신가요?",
        subtitle: null,
        type: "competence",
        questions: [
            {
                id: 0,
                text: "아니요. 초보자가 키우기 좋은 식물로 추천해주세요!",
                icon: icon_route + "folded-hands.svg"
            },
            {
                id: 1,
                text: "네. 어떤 식물이든 잘 키울 자신이 있어요! ",
                icon: icon_route + "power.svg"
            }
        ]
    },
    {
        num: 3,
        title: "식물이 있을 곳에 햇빛이 많이 들어오나요?",
        subtitle: null,
        type: "brightness",

        questions: [
            {
                id: 0,
                text: "아니요. 해가 잘 들지 않아요.",
                icon: icon_route + "sunny.svg"
            },
            {
                id: 1,
                text: "네. 햇빛이 강하게 들어와요.",
                icon: icon_route + "sunglasses.svg"
            }
        ]
    },
    {
        num: 4,
        title: "어떤 이유로 식물 추천을 받고 계신가요?",
        subtitle: null,
        type: null,

        questions: [
            {
                id: 0,
                text: "지인에게 선물하고 싶어요!",
                icon: icon_route + "gift.svg"
            },
            {
                id: 1,
                text: "제가 직접 키우고 싶어요!",
                icon: icon_route + "plant.svg"
            }
        ]
    }
];
