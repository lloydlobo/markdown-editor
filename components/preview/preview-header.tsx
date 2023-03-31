import { ActionType, AppContext } from "@/store/AppContext";
import { Text, Box, Button, IconButton, Flex } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { CopyIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function PreviewHeader() {
  const { dispatch } = useContext(AppContext);

  const handleOnClick = () => {
    dispatch({ type: ActionType.TOGGLE_PREVIEW });
  };

  return (
    <Box
      // minHeight={{ base: "10", md: "10" }}
      _dark={{ bg: "whiteAlpha.100" }}
      bg="blackAlpha.100"
      px="4"
      py="3"
    >
      <Flex align="center" justify="space-between">
        <Box fontSize="sm" letterSpacing="widest" opacity="0.75" textTransform="uppercase">preview</Box>
        <IconButton
          icon={<ViewIcon />}
          onClick={handleOnClick}
          size="sm"
          variant="link"
          aria-label="Toggle markdown preview"
        />
      </Flex>
    </Box>
  );
}
