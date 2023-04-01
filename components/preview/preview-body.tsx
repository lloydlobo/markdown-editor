import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ActionType, AppContext } from "@/store/AppContext";
import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Stack,
  Center,
  AbsoluteCenter,
  Table,
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { INote } from "@/types/inote";
import { nanoid } from "nanoid";
import { getTimestamp } from "@/utils/get-timestamp";
import { CustomLink } from "@/components/common/custom-link";
import remarkGfm from "remark-gfm";
import { mode } from "@chakra-ui/theme-tools";

export default function PreviewBody() {
  const { state, dispatch } = useContext(AppContext);
  const { activeNote, isPreview } = state;

  const addNewNote = () => {
    const newNote: INote = {
      id: state.notes ? state.notes?.length + 1 : -1,
      nanoid: nanoid(),
      title: "Untitled",
      content: "",
      createdAt: getTimestamp(),
    };
    dispatch({ type: ActionType.ADD_NOTE, note: newNote });
  };

  if (!activeNote) {
    return (
      <Center pos="relative" h="full">
        <AbsoluteCenter>
          <Box>
            <Button leftIcon={<PlusSquareIcon />} onClick={addNewNote}>
              Create new
            </Button>
          </Box>
        </AbsoluteCenter>
      </Center>
    );
  }

  return (
    <Box
      className="preview-markdown"
      w="full"
      maxWidth={{ md: isPreview ? "100vw" : "" }}
      marginInline={{ md: isPreview ? "auto" : "" }}
      p="6"
    >
      <Stack pb="12">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]} // remark plugin to support GFM (autolink literals, footnotes, strikethrough, tables, tasklists).
          components={{
            a: CustomLink,
            // table: ({ ...otherProps }) => <Box boxShadow="md"><Table variant="simple" {...otherProps}/></Box>,
          }}
        >
          {activeNote?.content ? activeNote.content : ""}
        </ReactMarkdown>
      </Stack>
    </Box>
  );
}
