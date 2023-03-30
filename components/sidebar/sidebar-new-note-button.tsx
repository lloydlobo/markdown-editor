import { Button } from '@chakra-ui/react'
import { ActionType, AppContext } from "@/store/AppContext";
import React, { useContext, useState } from "react";
import { PlusSquareIcon } from '@chakra-ui/icons';
import { nanoid } from 'nanoid';
import { getTimestamp } from '@/utils/get-timestamp';
import { INote } from '@/types/inote';


export default function SidebarNewNoteButton() {
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

  return (
    <Button w="full" leftIcon={<PlusSquareIcon />} onClick={addNewNote}>
      Create new
    </Button>

  )
}

