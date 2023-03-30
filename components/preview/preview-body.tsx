import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ActionType, AppContext } from "@/store/AppContext";
import React, { useContext, useState } from "react";
import { Box, Button, Stack } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { INote } from "@/types/inote";
import { nanoid } from "nanoid";
import { getTimestamp } from "@/utils/get-timestamp";

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
      <Box>
        <Button leftIcon={<PlusSquareIcon />} onClick={addNewNote}>
          Create new
        </Button>
      </Box>
    );
  }

  return (
    <Box
      overflowY={"auto"}
      maxWidth={{ md: isPreview ? "100vw" : "" }}
      marginInline={{ md: isPreview ? "auto" : "" }}
    >
      <Stack>
        <ReactMarkdown>
          {activeNote?.content ? activeNote.content : ""}
        </ReactMarkdown>
      </Stack>
    </Box>
  );
}
