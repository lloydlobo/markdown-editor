import { ActionType, AppContext } from "@/store/AppContext";
import {
  Button,
  ButtonGroup,
  chakra,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { SaveIcon } from "../icons/icons";
import { useToast } from "@chakra-ui/react";

export default function NoteSave() {
  const { state, dispatch } = useContext(AppContext);
  const { activeNote } = state;
  const toast = useToast();

  function handleOnClick() {
    if (!activeNote) {
      return;
    }
    dispatch({ type: ActionType.SAVE_CHANGES, note: activeNote });
    // description: `${activeNote.title} saved`,
    toast({
      title: "Saved changes",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <Tooltip label="save changes">
      <Button
        aria-label="Save changes"
        onClick={handleOnClick}
        data-testid="saveButton"
        textTransform="capitalize"
        alignItems="center"
        w="fit-content"
        isDisabled={activeNote ? false : true}
        bg="orange.400"
        _dark={{ bg: "orange.400" }}
      >
        <chakra.div aria-hidden="true" pe={{ md: "2" }}>
          <SaveIcon aria-hidden="true" />
        </chakra.div>
        <chakra.span display={{ base: "none", md: "inline-block" }}>
          save changes
        </chakra.span>
      </Button>
    </Tooltip>
  );
}
