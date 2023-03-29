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
      minHeight={{ base: "10", md: "10" }}
      _dark={{ bg: "whiteAlpha.100" }}
      bg="blackAlpha.100"
    >
      <Flex align="center" justify="space-between">
        <Box textTransform="uppercase">markdown</Box>

        <IconButton
          icon={<ViewIcon />}
          onClick={handleOnClick}
          // display={{ md: "none" }}
          opacity={{ md: 0 }}
          pointerEvents={{ md: "none" }}
          aria-label="Toggle markdown preview"
        />
      </Flex>
    </Box>
  );
}
