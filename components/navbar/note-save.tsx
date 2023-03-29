import { Button } from "@chakra-ui/react";
import React from "react";
import { SaveIcon } from "../icons/icons";

export default function NoteSave() {
  return (
    <Button
      textTransform="capitalize"
      alignItems="center"
      leftIcon={<SaveIcon />}
    >
      save changes
    </Button>
  );
}
