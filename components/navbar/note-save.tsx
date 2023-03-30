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
import { ButtonOrange } from "../common/button-orange";

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
      <ButtonOrange
        aria-label="Save changes"
        data-testid="saveButton"
        props={{
          onClick: handleOnClick,
          textTransform: "capitalize",
          alignItems: "center",
          isDisabled: activeNote ? false : true,
          w: "fit-content",
        }}
      >
        <chakra.div aria-hidden="true" pe={{ md: "2" }}>
          <SaveIcon aria-hidden="true" />
        </chakra.div>
        <chakra.span display={{ base: "none", md: "inline-block" }}>
          save changes
        </chakra.span>
      </ButtonOrange>
    </Tooltip>
  );
}
