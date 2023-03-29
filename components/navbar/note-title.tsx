import { ActionType, AppContext } from "@/store/AppContext";
import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  Input,
  Stack,
} from "@chakra-ui/react";
import React, { useContext } from "react";

export default function NoteTitle() {
  const { state, dispatch } = useContext(AppContext);
  const { activeNote } = state;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!activeNote) {
      return;
    }
    dispatch({
      type: ActionType.UPDATE_NOTE_NAME,
      note: { ...activeNote, title: e.target.value },
    });
  };

  return (
    <Stack>
      <Input
        as={Input}
        data-testid="titleInput"
        onChange={(e) => handleOnChange(e)}
        pointerEvents={activeNote ? "auto" : "none"}
        disabled={activeNote ? false : true}
        placeholder={activeNote ? "Untitled" : ""}
        value={activeNote ? activeNote.title : ""}
        _placeholder={{ opacity: 1, color: "whiteAlpha.700" }}
        variant="flushed"
        rounded="md"
        borderColor={"transparent"}
        px="2"
      />
    </Stack>
  );
}
