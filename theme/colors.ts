import {ThemeTypes} from "~/types/themeTypes/ThemeType";

const themeLigthColors: ThemeTypes[] = [
    {
        name: "IDRD_THEME",
        dark: !1,
        variables: {
            "border-color": "#e5eaef"
        },
        colors: {
            primary: "#594d95",
            secondary: "#704691",
            info: "#00cae3",
            success: "#4caf50",
            accent: "#d7c060",
            warning: "#fb8c00",
            error: "#ff5252",
            lightprimary: "#F2ECF9",
            lightsecondary: "#EDF8FA",
            lightsuccess: "#E6FFFA",
            lighterror: "#FDEDE8",
            lightwarning: "#FEF5E5",
            textPrimary: "#2A3547",
            textSecondary: "#2A3547",
            borderColor: "#e5eaef",
            inputBorder: "#DFE5EF",
            containerBg: "#ffffff",
            background: "#ffffff",
            hoverColor: "#f6f9fc",
            surface: "#fff",
            "on-surface-variant": "#fff",
            grey100: "#F2F6FA",
            grey200: "#EAEFF4"
        }
    },
];

const themeDarkColors: ThemeTypes[] = [
    {
        name: "DARK_IDRD_THEME",
        dark: !0,
        variables: {
            "border-color": "#333F55"
        },
        colors: {
            primary: "#594d95",
            secondary: "#704691",
            info: "#00cae3",
            success: "#4caf50",
            accent: "#d7c060",
            warning: "#fb8c00",
            error: "#ff5252",
            lightprimary: "#26153C",
            lightsecondary: "#09454B",
            lightsuccess: "#1B3C48",
            lighterror: "#4B313D",
            lightwarning: "#4D3A2A",
            textPrimary: "#EAEFF4",
            textSecondary: "#7C8FAC",
            borderColor: "#333F55",
            inputBorder: "#465670",
            containerBg: "#171c23",
            background: "#171c23",
            hoverColor: "#333f55",
            surface: "#171c23",
            "on-surface-variant": "#171c23",
            grey100: "#333F55",
            grey200: "#465670"
        }
    },
]

export {
    themeLigthColors,
    themeDarkColors
}