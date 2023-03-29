import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Logo() {
  return (
    <Box
      display={{ sm: "none", md: "flex" }}
      alignItems="center"
      pr="4"
      borderInlineEnd="thin"
      borderInlineEndColor="blackAlpha.400"
      h="full"
    >
      <Text letterSpacing="widest" textTransform="uppercase">markdown</Text>
    </Box>
  );
}