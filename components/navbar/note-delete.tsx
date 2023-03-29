import { IconButton } from "@chakra-ui/react";
import React from "react";
import { DeleteIcon } from "../icons/icons";

export default function NoteDelete() {
  return <IconButton aria-label="delete note" icon={<DeleteIcon />} />;
}
