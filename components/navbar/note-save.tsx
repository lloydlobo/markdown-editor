import { ActionType, AppContext } from "@/store/AppContext";
import { Button, ButtonGroup, chakra, IconButton } from "@chakra-ui/react";
import React, { useContext } from "react";
import { SaveIcon } from "../icons/icons";
import { useToast } from "@chakra-ui/react";

export default function NoteSave() {
  const { state, dispatch } = useContext(AppContext);
  const { activeNote } = state;
  const toast = useToast();

  const handleOnClick = () => {
    if (!activeNote) return;

    dispatch({ type: ActionType.SAVE_CHANGES, note: activeNote });
    toast({
      title: "Saved changes",
      // description: `${activeNote.title} saved`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
      <Button
        textTransform="capitalize"
        data-testid="saveButton"
        aria-label="Save changes"
        w="fit-content"
        alignItems="center"
        onClick={handleOnClick}
        disabled={activeNote ? false : true}
        pointerEvents={activeNote ? "auto" : "none"}
      >
        <chakra.div pe={{ md: "2" }}><SaveIcon aria-hidden="true" /></chakra.div>
        <chakra.span display={{ base: "none", md: "inline-block" }}>
          save changes
        </chakra.span>
      </Button>
  );
}
