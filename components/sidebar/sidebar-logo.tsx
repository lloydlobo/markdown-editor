import { Link as ChakraLink, Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Logo() {
  return (
    <ChakraLink as={ChakraLink} href="/">
      <Box
        borderInlineEndColor="blackAlpha.400"
        borderInlineEnd="thin"
        alignItems="center"
        h="full"
        pr="4"
      >
        <Text
          my="0"
          py="0"
          fontSize={{ base: "sm", md: "sm" }}
          lineHeight="base"
          fontWeight="bold"
          letterSpacing="0.5ch"
          textTransform="uppercase"
        >
          markdown
        </Text>
      </Box>
    </ChakraLink>
  );
}
