import { ActionType, AppContext } from "@/store/AppContext";
import {
  Box,
  chakra,
  Flex,
  Hide,
  IconButton,
  Input,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { DocumentIcon } from "../icons/icons";

export default function NoteTitle() {
  const { state, dispatch } = useContext(AppContext);
  const { activeNote } = state;

  const toast = useToast();

  function handleOnChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
    if (!activeNote) {
      return;
    }
    dispatch({
      type: ActionType.UPDATE_NOTE_NAME,
      note: { ...activeNote, title: e.target.value },
    });
  }

  function handleOnClickCopyMarkdown() {
    let contentToCopy = activeNote?.content.trim();
    if (typeof contentToCopy !== "undefined" && contentToCopy.length > 0) {
      try {
        navigator.clipboard.writeText(contentToCopy);
        toast({
          title: "Copied markdown content",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } catch (err) {
        toast({
          title: "No content to copy",
          description: JSON.stringify(err),
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "No content to copy",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  // <>
  //   <Show above='sm'>
  //     <Box>This text appears at the "sm" value screen width or greater.</Box>
  //   </Show>
  //   <Hide below='md'>
  //     <Box>This text hides at the "md" value screen width and smaller.</Box>
  //   </Hide>
  // </>
  return (
    <Flex
      overflowX="auto"
      pos="relative"
      opacity={activeNote ? "1" : "0"}
      pointerEvents={activeNote ? "auto" : "none"}
      alignItems="center"
    >
      <Tooltip label="copy markdown">
        <IconButton
          variant="ghost"
          stroke="gray.300"
          icon={<DocumentIcon aria-hidden="true" />}
          aria-label="copy markdown"
          onClick={handleOnClickCopyMarkdown}
        />
      </Tooltip>

      <Box
        ml="2"
        title={activeNote ? `${activeNote.title.trim()}.md` : "untitled.md"}
      >
        <Hide below="md">
          <chakra.label
            lineHeight="none"
            fontSize={{ base: "2xs", md: "xs" }}
            _dark={{ color: "whiteAlpha.500" }}
            color="blackAlpha.500"
            textTransform="capitalize"
          >
            document name
          </chakra.label>
        </Hide>
        <Input
          my="0"
          data-testid="titleInput"
          value={activeNote ? activeNote.title : ""}
          onChange={(e) => handleOnChangeTitle(e)}
          size="sm"
          pointerEvents={activeNote ? "auto" : "none"}
          disabled={activeNote ? false : true}
          placeholder={activeNote ? "Untitled" : ""}
          _placeholder={{ opacity: 1, color: "whiteAlpha.700" }}
          variant="flushed"
          borderColor={"transparent"}
        />
      </Box>
    </Flex>
  );
}
