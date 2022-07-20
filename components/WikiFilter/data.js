export const filter_data = [
    {
        title: "종류",
        type: "group",
        select: [
            { value: "0", label: "잎 식물" },
            { value: "1", label: "꽃/열매 식물" },
            { value: "2", label: "다육 식물" }
        ]
    },
    {
        title: "숙련도",
        type: "competence",
        select: [
            { value: "0", label: "초보자용 식물" },
            { value: "1", label: "숙련자용 식물" }
        ]
    },
    {
        title: "조도",
        type: "brightness",
        select: [
            { value: "0", label: "빛이 많이 필요한 식물" },
            { value: "1", label: "빛이 적어도 되는 식물" }
        ]
    }
];
