import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

// Defualt styles.
const styles = {
  global: (props: Record<string, any>) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("white", "gray.800")(props),
      fontFamily: "body",
      lineHeight: "base",
    },
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },

    "html, body": {
      bg: props.colorMode === "dark" ? "gray.900" : "gray.50",
      color: props.colorMode === "dark" ? "gray.50" : "gray.600",
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

    h1: { fontSize: "3xl", lineHeight: "base", fontWeight: "bold" },
    h2: { fontSize: "2xl", lineHeight: "base", fontWeight: "bold" },
    h3: { fontSize: "xl", lineHeight: "base", fontWeight: "bold" },
    h4: { fontSize: "md", lineHeight: "base", fontWeight: "bold" },
    h5: { fontSize: "sm", lineHeight: "base", fontWeight: "bold" },
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
    200: "#BFC2C9",
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

export const theme = extendTheme({
  space,
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
