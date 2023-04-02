import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// Mental model: If you need a spacing of 40px, divide it by 4. That'll give you 10. Then use it in your component.

const config: ThemeConfig = {
  initialColorMode: "system", // "dark" | "light" | "system".
  useSystemColorMode: true,
};

// Defualt styles.
const styles = {
  global: (props: Record<string, any>) => ({
    body: {
      bg: mode("blackAlpha.50", "gray.900")(props),
      color: mode("gray.600", "gray.50")(props),
      fontFamily: "body",
      lineHeight: "base",
    },
    // ".preview-markdown :where(h1,h2,h3,h4,h5,h6)": {
    //   fontFamily: "var(--chakra-fonts-heading)",
    // },
    ".markdown-editor textarea": {
      fontFamily: "var(--chakra-fonts-code)",
    },
    "*::placeholder": {
      color: mode("gray.400", "gray.200")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },
    "html, body": {
      // bg: props.colorMode === "dark" ? "gray.900" : "gray.50",
      // color: props.colorMode === "dark" ? "gray.50" : "gray.600",
      minH: "100vh",
      overflowX: "hidden",
      colorScheme: "dark",
    },
    "*:focus, *[data-focus]": {
      outline: "2px solid",
      outlineColor: mode("gray.500", "gray.50"),
      outlineOffset: "3px",
    },
    "h2,h3,h4": {
      scrollMarginTop: "4rem",
      "&:hover": {
        "a.anchor": {
          opacity: 1,
        },
      },
    },
    "ul,ol": {
      listStyle: "none",
      // paddingInlineStart: "8px",
    },
    ".img": {
      rounded: "lg",
    },
    // button: { bg: mode("orange.500", "orange.400"), },
    "a.anchor": {
      opacity: 0,
      marginX: "3",
      "&:before": {
        content: `"#"`,
        color: mode("orange.500", "orange.400"),
      },
      "&:focus": {
        opacity: 1,
      },
    },
    h1: {
      fontSize: "3xl",
      lineHeight: "base",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    h2: {
      fontSize: "2xl",
      lineHeight: "base",
      fontWeight: "thin",
      marginBottom: "1rem",
    },
    h3: {
      fontSize: "xl",
      lineHeight: "base",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    h4: {
      fontSize: "md",
      lineHeight: "base",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    h5: {
      fontSize: "sm",
      lineHeight: "base",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    h6: {
      fontSize: "xs",
      lineHeight: "base",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    "p, ul, ol": { mb: "4" },
  }),
};

const space = {
  vGutter: "6.25rem",
};
const shadows = {
  highlight: mode(
    "inset 0 2px 0 0 rgb(255 255 255 / 5%)",
    "inset 0 2px 0 0 rgb(255 255 255 / 5%)"
  ),
};

/**
 * # Example
 *
 * `<Box textStyle='h1'>This is a box</Box>`
 */
const textStyles = {
  h1: {
    // you can also use responsive styles
    fontSize: ["48px", "72px"],
    fontWeight: "bold",
    lineHeight: "110%",
    letterSpacing: "-2%",
  },
  h2: {
    fontSize: ["36px", "48px"],
    fontWeight: "semibold",
    lineHeight: "110%",
    letterSpacing: "-1%",
  },
  h3: {
    fontSize: ["24px", "36px"],
    fontWeight: "semibold",
    lineHeight: "110%",
    letterSpacing: "-1%",
  },
  h4: {
    fontSize: ["16px", "24px"],
    fontWeight: "semibold",
    lineHeight: "110%",
    letterSpacing: "-1%",
  },
};

// These are the default breakpoints
const breakpoints = {
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536px
};

// Internally, we transform to this
// const breakpoints = ['0em', '30em', '48em', '62em', '80em', '96em']

const colors = {
  gray: {
    50: "#F1F2F3",
    100: "#D8DADE",
    200: "#C1C4CB",
    300: "#A6AAB4",
    400: "#7D8188",
    500: "#747A8B",
    600: "#34373E",
    700: "#2c2d31",
    800: "#1e1f23",
    900: "#15161a",
  },

  orange: {
    50: "#FCEDE9",
    100: "#F6CCC1",
    200: "#F0AC98",
    300: "#EA8B70",
    400: "#E56B48",
    500: "#DF4A20",
    600: "#B23B1A",
    700: "#862D13",
    800: "#591E0D",
    900: "#2D0F06",
  },
};

const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
};

const lineHeights = {
  normal: "normal",
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: "2",
  "3": ".75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "7": "1.75rem",
  "8": "2rem",
  "9": "2.25rem",
  "10": "2.5rem",
};

const semanticTokens = {
  colors: {
    text: {
      default: "#16161D",
      _dark: "#ade3b8",
    },
    heroGradientStart: {
      default: "#7928CA",
      _dark: "#e3a7f9",
    },
    heroGradientEnd: {
      default: "#FF0080",
      _dark: "#fbec8f",
    },
  },
  radii: {
    button: "12px",
  },
};

export const theme = extendTheme({
  space,
  fontSizes,
  shadows,
  colors,
  config,
  styles,
  textStyles,
  breakpoints,
});

// // 1. Wrap the rendered mdx in a container
// const MDXWrapper = (props) => <div className='mdx-prose' {...props} />
// // 2. Define global styles
// // PRO TIP: Again, you can also use the function version here
// const theme = {
//   styles: {
//     global: {
//       '.mdx-prose': {
//         h1: { fontSize: 'xl', mb: '4', },
//         p: { fontSize: 'sm', lineHeight: '1.4', },
//       },
//     },
//   },
// }
//
