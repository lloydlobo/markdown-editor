import { ActionType, AppContext } from "@/store/AppContext";
import { chakra } from "@chakra-ui/react";
import React, { useContext } from "react";
import { SaveIcon } from "../icons/icons";
import { useToast } from "@chakra-ui/react";
import { ButtonOrange } from "../common/button-orange";

/**
 * A component to save changes to the active note in the app context
 */
export default function NoteSave() {
  const { state, dispatch } = useContext(AppContext);
  const { activeNote } = state;
  const toast = useToast();
  /**
   * Handle click on the save button
   */
  function handleOnClick() {
    if (!activeNote) {
      return;
    }

    if (activeNote.content.trim().length === 0){
    toast({
      title: "Nothing to save",
      status: "info",
    });
    return;

    }

    dispatch({ type: ActionType.SAVE_CHANGES, note: activeNote });

    toast({
      title: "Saved changes",
      status: "success",
    });
  }

  return (
    <ButtonOrange
      data-testid="saveButton"
      aria-label="Save changes"
      tooltipLabel={"save changes"}
      onClick={handleOnClick}
      isDisabled={activeNote ? false : true}
      props={{
        w: "fit-content",
        textTransform: "capitalize",
        alignItems: "center",
      }}
    >
      <chakra.div aria-hidden="true" pe={{ md: "2" }}>
        <SaveIcon aria-hidden="true" />
      </chakra.div>
      <chakra.span display={{ base: "none", md: "inline-block" }}>
        save changes
      </chakra.span>
    </ButtonOrange>
  );
}
