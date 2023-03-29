import { ActionType, AppContext } from "@/store/AppContext";
import { CopyIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  chakra,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  IconButton,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useContext } from "react";

export default function NoteTitle() {
  const { state, dispatch } = useContext(AppContext);
  const { activeNote } = state;
  const toast = useToast();

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!activeNote) {
      return;
    }
    dispatch({
      type: ActionType.UPDATE_NOTE_NAME,
      note: { ...activeNote, title: e.target.value },
    });
  };

  const handleOnClickCopyMarkdown = () => {
    let contentToCopy = activeNote?.content;
    if (typeof contentToCopy !== 'undefined' && contentToCopy.length > 0) {
      try {
        navigator.clipboard.writeText(contentToCopy);
        toast({ title: "Copied markdown content", status: "success", duration: 3000, isClosable: true, });
      } catch (err) {
        toast({ title: "No content to copy", description: JSON.stringify(err), status: "error", duration: 3000, isClosable: true, });
      }
    } else {
      toast({ title: "No content to copy", status: "error", duration: 3000, isClosable: true, });
    }
  }

  return (
    <Flex
      overflowX="auto"
      pos="relative"
      opacity={activeNote ? "1" : "0"}
      pointerEvents={activeNote ? "auto" : "none"}
      alignItems="center"
      title={activeNote ? `${activeNote.title.trim()}.md` : "untitled.md"}
    >
      <IconButton
        variant="ghost"
        icon={<CopyIcon aria-hidden="true" />}
        aria-label="copy markdown"
        // size="sm"
        onClick={handleOnClickCopyMarkdown}
      />
      <Box ml="2">
        <chakra.label
          lineHeight="none"
          display={{ base: "none", md: "inline-block" }}
          fontSize={{ base: "2xs", md: "xs" }}
          _dark={{ color: "whiteAlpha.500" }}
          color="blackAlpha.500"
          textTransform="capitalize"
        >
          document name
        </chakra.label>
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
