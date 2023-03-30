import React, { useContext } from "react";

import { IconButton, Tooltip, useDisclosure } from "@chakra-ui/react";

import { DeleteIcon } from "../icons/icons";
import PromptDelete from "./prompt-delete";
import { AppContext } from "@/store/AppContext";

export default function NoteDelete() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { state, dispatch } = useContext(AppContext);
  const { activeNote } = state;

  function stopPropagation(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    // e.preventDefault();
  }

  function handleOnClick(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    stopPropagation(e);
    onOpen();
  }

  return (
    <>
      <PromptDelete isOpen={isOpen} onClose={onClose} />

      <Tooltip label="delete note">
        <IconButton
          variant="ghost"
          onClick={(e) => handleOnClick(e)}
          data-testid="deleteButton"
          isDisabled={activeNote ? false : true}
          aria-label="delete note"
          icon={
            <DeleteIcon style={{ height: "18px" }} fill="none" color="gray" />
          }
        />
      </Tooltip>
    </>
  );
}
