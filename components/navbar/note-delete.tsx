import { IconButton, Tooltip } from "@chakra-ui/react";
import React from "react";
import { DeleteIcon } from "../icons/icons";

export default function NoteDelete() {
  return (
    <Tooltip label="delete note">
      <IconButton aria-label="delete note" icon={<DeleteIcon />} />
    </Tooltip>
  );
}
