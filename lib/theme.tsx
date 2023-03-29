import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'


const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};


// Defualt styles.
const styles = {
  global: (props: Record<string, any>) => ({
    body: {
      fontFamily: 'body',
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.800')(props),
      lineHeight: 'base',
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
  }),
}

/** 
 * # Example
 *
 * `<Box textStyle='h1'>This is a box</Box>` 
 */
const textStyles = {
  h1: {
    // you can also use responsive styles
    fontSize: ['48px', '72px'],
    fontWeight: 'bold',
    lineHeight: '110%',
    letterSpacing: '-2%',
  },
  h2: {
    fontSize: ['36px', '48px'],
    fontWeight: 'semibold',
    lineHeight: '110%',
    letterSpacing: '-1%',
  },
  h3: {
    fontSize: ['24px', '36px'],
    fontWeight: 'semibold',
    lineHeight: '110%',
    letterSpacing: '-1%',
  },
  h4: {
    fontSize: ['16px', '24px'],
    fontWeight: 'semibold',
    lineHeight: '110%',
    letterSpacing: '-1%',
  },
};

// These are the default breakpoints
const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
}

// Internally, we transform to this
// const breakpoints = ['0em', '30em', '48em', '62em', '80em', '96em']

export const theme = extendTheme({
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

