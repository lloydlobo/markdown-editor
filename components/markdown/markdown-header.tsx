import { ActionType, AppContext } from '@/store/AppContext';
import { Text, Box, Button, IconButton, Flex } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import { CopyIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
export default function MarkdownHeader() {
  const { state, dispatch } = useContext(AppContext);

  const handleOnClick = () => {
    dispatch({ type: ActionType.TOGGLE_PREVIEW });
  }

  return (
    <Box>
      <Flex align="center" justify="space-between">
        <Text textTransform="uppercase">markdown</Text>
        <IconButton icon={<ViewIcon />} onClick={handleOnClick} display={{ md: "none" }} aria-label="Toggle markdown preview" />
      </Flex>
    </Box>
  )
}

