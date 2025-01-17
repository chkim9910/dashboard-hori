import { mode } from "@chakra-ui/theme-tools";
import { lighten } from "polished";

export const variablesC = {
  $maxW: "1280px",
};

export const globalStyles = {
  colors: {
    yellow: {
      base: "#FFB547",
      100: lighten(0.2, "#FFB547"),
    },
    brand: {
      100: "#E9E3FF",
      200: "#422AFB",
      300: "#422AFB",
      400: "#7551FF",
      500: "#422AFB",
      600: "#3311DB",
      700: "#02044A",
      800: "#190793",
      900: "#11047A",
    },
    brandScheme: {
      100: "#E9E3FF",
      200: "#7551FF",
      300: "#7551FF",
      400: "#7551FF",
      500: "#422AFB",
      600: "#3311DB",
      700: "#02044A",
      800: "#190793",
      900: "#02044A",
    },
    brandTabs: {
      100: "#E9E3FF",
      200: "#422AFB",
      300: "#422AFB",
      400: "#422AFB",
      500: "#422AFB",
      600: "#3311DB",
      700: "#02044A",
      800: "#190793",
      900: "#02044A",
    },
    secondaryGray: {
      100: "#E0E5F2",
      200: "#E1E9F8",
      300: "#F4F7FE",
      400: "#E9EDF7",
      500: "#8F9BBA",
      600: "#A3AED0",
      700: "#707EAE",
      800: "#707EAE",
      900: "#1B2559",
    },
    red: {
      100: "#FEEFEE",
      500: "#EE5D50",
      600: "#E31A1A",
    },
    blue: {
      50: "#EFF4FB",
      500: "#3965FF",
    },
    orange: {
      100: "#FFF6DA",
      500: "#FFB547",
    },
    green: {
      100: "#E6FAF5",
      500: "#01B574",
    },
    navy: {
      50: "#d0dcfb",
      100: "#aac0fe",
      200: "#a3b9f8",
      300: "#728fea",
      400: "#3652ba",
      500: "#1b3bbb",
      600: "#24388a",
      700: "#1B254B",
      800: "#111c44",
      900: "#0b1437",
    },
    gray: {
      100: "#FAFCFE",
      200: "#fafcfa",
    },
    white: "#FFF",
    whiteAlpha: {
      50: "rgba(255, 255, 255, 0.04)",
      100: "rgba(255, 255, 255, 0.06)",
      200: "rgba(255, 255, 255, 0.08)",
      300: "rgba(255, 255, 255, 0.16)",
      400: "rgba(255, 255, 255, 0.24)",
      500: "rgba(255, 255, 255, 0.36)",
      600: "rgba(255, 255, 255, 0.48)",
      700: "rgba(255, 255, 255, 0.64)",
      800: "rgba(255, 255, 255, 0.80)",
      900: "rgba(255, 255, 255, 0.92)",
    },
    transparent: "transparent",
  },
  fontweights: {
    fontweight: {
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },
  radii: {
    none: "0",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    full: "9999px",
  },
  styles: {
    global: (props) => ({
      body: {
        minW: "330px",
        // overflowX: 'hidden',
        bg: mode("white", "navy.900")(props),
        fontFamily: '"DM Sans", "sans-serif"',
        letterSpacing: "-0.5px",
        fontSize: "16px",
        lineHeight: "1.5",
        color: mode("gray.900", "white")(props),
        background: "secondaryGray.300",
      },
      input: {
        color: "gray.700",
      },
      ".css-1ydjfm6": {
        borderColor: "secondaryGray.200 !important",
      },
      ".css-1ydjfm6[data-checked]": {
        background: "brand.500 !important",
        borderColor: "brand.500 !important",
      },
      html: {
        fontFamily: '"Noto Sans KR", "sans-serif"',
      },
      "ul > li": {
        listStyle: "none",
      },
      ".chakra-container": {
        maxWidth: "calc(1280px + var(--chakra-space-4) * 2) !important",
      },
    }),
  },
};
