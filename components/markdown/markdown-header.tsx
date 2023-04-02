import { ActionType, AppContext } from "@/store/AppContext";
import { Box, IconButton, Flex, FormErrorIcon } from "@chakra-ui/react";
import React, { useContext } from "react";
import { BellIcon, ReactIcon, ViewIcon } from "@chakra-ui/icons";
import MarkdownIcon, { CodeBracketIcon } from "../icons/icons";

export default function MarkdownHeader() {
  const { state, dispatch } = useContext(AppContext);
  const { isCodemirror } = state;

  const handleOnClickTogglePreview = () => {
    dispatch({ type: ActionType.TOGGLE_PREVIEW });
  };
  const handleOnClickToggleCodemirror = () => {
    dispatch({ type: ActionType.TOGGLE_CODEMIRROR });
  };

  return (
    <Box px="4" py="3" _dark={{ bg: "whiteAlpha.100" }} bg="blackAlpha.100">
      <Flex align="center" justify="space-between">
        <Box
          fontSize="sm"
          letterSpacing="widest"
          opacity="0.75"
          textTransform="uppercase"
        >
          markdown
        </Box>
        <Flex>
          <IconButton
            icon={
              isCodemirror ? (
                <MarkdownIcon
                  style={{ width: "17px", height: "17px", fillOpacity: "0.9" }}
                />
              ) : (
                <CodeBracketIcon />
              )
            }
            onClick={handleOnClickToggleCodemirror}
            variant="link"
            size="sm"
            aria-label="Toggle codemirror editor"
          />
          <IconButton
            icon={<ViewIcon />}
            onClick={handleOnClickTogglePreview}
            variant="link"
            size="sm"
            display={{ md: "none" }}
            aria-label="Toggle markdown preview"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
