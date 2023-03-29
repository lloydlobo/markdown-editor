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
    <Box>
      <Flex align="center" justify="space-between">
        <Text textTransform="uppercase">preview</Text>
        <IconButton
          icon={<ViewIcon />}
          onClick={handleOnClick}
          aria-label="Toggle markdown preview"
        />
      </Flex>
    </Box>
  );
}
