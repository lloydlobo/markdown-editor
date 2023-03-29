import { ActionType, AppContext } from "@/store/AppContext";
import {
  Box,
  chakra,
  Flex,
  Hide,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Tooltip,
  useToast,
  VisuallyHidden,
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
      <Tooltip
        label={
          activeNote ? `copy contents of ${activeNote.title.trim()}.md` : ""
        }
      >
        <IconButton
          variant="ghost"
          stroke="gray.300"
          icon={<DocumentIcon aria-hidden="true" />}
          aria-label="copy markdown"
          onClick={handleOnClickCopyMarkdown}
        />
      </Tooltip>

      <Box ml="2">
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
        <Tooltip
          label={activeNote ? `rename ${activeNote.title.trim()}.md` : ""}
        >
          <InputGroup
            variant="flushed"
            pointerEvents={activeNote ? "auto" : "none"}
            size="sm"
          >
            <VisuallyHidden>
              <InputLeftAddon children="Note title" />
            </VisuallyHidden>
            <Input
              my="0"
              pr="8"
              data-testid="titleInput"
              value={activeNote ? activeNote.title : ""}
              disabled={activeNote ? false : true}
              onChange={(e) => handleOnChangeTitle(e)}
              placeholder={activeNote ? "Untitled" : ""}
              _placeholder={{ opacity: 1, color: "whiteAlpha.700" }}
              borderColor={"transparent"}
            />
            <Box pos="absolute" opacity="0.3" right="2">
              <Tooltip label="Automatic extension `.md` suffixed to the title">
                <InputRightAddon
                  borderColor={"transparent"}
                  aria-label="markdown file extension as .md"
                  children=".md"
                />
              </Tooltip>
            </Box>
          </InputGroup>
        </Tooltip>
      </Box>
    </Flex>
  );
}
