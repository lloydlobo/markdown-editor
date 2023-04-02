import { Link as ChakraLink, Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Logo() {
  return (
    <ChakraLink as={ChakraLink} href="/">
      <Box
        display={{ sm: "none", md: "flex" }}
        alignItems="center"
        pr="4"
        borderInlineEnd="thin"
        borderInlineEndColor="blackAlpha.400"
        h="full"
      >
        <Text
          fontWeight="bold"
          letterSpacing="0.5ch"
          textTransform="uppercase"
          lineHeight="none"
          mb="0"
        >
          markdown
        </Text>
      </Box>
    </ChakraLink>
  );
}
