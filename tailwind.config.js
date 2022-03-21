module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        screens: {
            sm: "360px",
            md: "720px",
            lg: "1140px",
        },
        colors: {
            transparent: "transparent",
            text: "#000000",
            "text-hightlight": "#ffffff",
            "text-light": "#121212",
            "text-lighter": "#767676",
            white: "#ffffff",
            gray: "#c4c4c4",
            "gray-light": "#f2f2f2",
            primary: "#45BA66",
            "primary-dark": "#5B734E",
            "primary-light": "#69BF3B",
            bg: "#ffffff",
            "bg-linerar":
                "linear-gradient(107.56deg, #DEF9F6 0%, #F9EBDE 100%)",
            red: "#ff0000",
        },
        fontFamily: {
            sans: ["Noto Sans KR", "sans-serif"],
            serif: ["Noto Serif KR", "serif"],
        },
    },
    plugins: [],
};
