import { ActionType, AppContext } from "@/store/AppContext";
import {
  Text,
  Box,
  Button,
  IconButton,
  Flex,
  VisuallyHidden,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { CopyIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function MarkdownHeader() {
  const { state, dispatch } = useContext(AppContext);

  const handleOnClick = () => {
    dispatch({ type: ActionType.TOGGLE_PREVIEW });
  };

  return (
    <Box
      px="4"
      py="3"
      _dark={{ bg: "whiteAlpha.100" }}
      bg="blackAlpha.100"
    // minHeight={{ base: "10", md: "10" }}
    >
      <Flex align="center" justify="space-between">
        <Box fontSize="sm" letterSpacing="widest" opacity="0.75" textTransform="uppercase">markdown</Box>
        <IconButton
          icon={<ViewIcon />}
          onClick={handleOnClick}
          opacity={{ md: 0 }}
          variant="link"
          size="sm"
          pointerEvents={{ md: "none" }}
          aria-label="Toggle markdown preview"
        />
      </Flex>
    </Box>
  );
}
