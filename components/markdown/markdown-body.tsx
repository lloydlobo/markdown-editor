import { ActionType, AppContext } from "@/store/AppContext";
import {
  Text,
  Box,
  Button,
  IconButton,
  chakra,
  VisuallyHidden,
  Textarea,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import {
  CopyIcon,
  PlusSquareIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";
import { INote } from "@/types/inote";
import { nanoid } from "nanoid";
import { getTimestamp } from "@/utils/get-timestamp";

export default function MarkdownBody() {
  const { state, dispatch } = useContext(AppContext);
  const { activeNote, notes } = state;

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

  const updateContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!activeNote) {
      return;
    }
    dispatch({
      type: ActionType.UPDATE_MARKDOWN,
      note: { ...activeNote, content: e.target.value },
    });
  };

  return (
    <>
      <VisuallyHidden>
        <label htmlFor="markdownEditor">Markdown editor</label>
      </VisuallyHidden>
      <Textarea
        id="markdownEditor"
        boxSize={"full"}
        data-testid="markdownArea"
        value={activeNote?.content ? activeNote.content : ""}
        onChange={updateContent}
        w="full"
        p="4"
        fontFamily="monospace"
        placeholder="Markdown is awesome!!"
        fontSize={["2xs", "xs"]}
      />
    </>
  );
}
