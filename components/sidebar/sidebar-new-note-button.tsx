import { ActionType, AppContext } from "@/store/AppContext";
import React, { useContext } from "react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { nanoid } from "nanoid";
import { getTimestamp } from "@/utils/get-timestamp";
import { INote } from "@/types/inote";
import { ButtonOrange } from "../common/button-orange";

export default function SidebarNewNoteButton() {
  const { state, dispatch } = useContext(AppContext);
  // const { activeNote, notes } = state;

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

  return (
    <ButtonOrange
      onClick={addNewNote}
      props={{
        w: "full",
        leftIcon: <PlusSquareIcon />,
      }}
    >
      Create new
    </ButtonOrange>
  );
}
