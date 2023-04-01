import { ActionType, AppContext } from "@/store/AppContext";
import { chakra } from "@chakra-ui/react";
import React, { useContext } from "react";
import { SaveIcon } from "../icons/icons";
import { useToast } from "@chakra-ui/react";
import { ButtonOrange } from "../common/button-orange";
import { localStoreSaveItem } from "@/utils/localstorage";
import { KEY_LOCAL_STORAGE_NOTES } from "@/lib/constants";

/**
 * A component to save changes to the active note in the app context
 */
export default function NoteSave() {
  const { state, dispatch } = useContext(AppContext);
  const { activeNote } = state;
  const toast = useToast();

  /**
   * Handle click on the save button
   *
   * NOTE: Important that we always check for `state.activeNote` and not `activeNote`:
   *    - The `activeNote` deconstructed variable is intialized at each rerender.
   *    - But the textarea in the markdown editor does not rerender this variable it seems??.
   */
  function useHandleOnClick() {
    if (!state.activeNote) {
      return;
    }

    if (state.activeNote && state.activeNote?.content.trim().length === 0) {
      toast({
        title: "Nothing to save",
        status: "info",
      });
      return;
    }

    if (state.activeNote) {
      dispatch({ type: ActionType.SAVE_CHANGES, note: state?.activeNote });
    }

    if (state) {
      const updatedNotes = state.notes?.map((note) => {
        if (note.nanoid === activeNote?.nanoid) {
          return state?.activeNote;
        }
        return note;
      });
      localStoreSaveItem(KEY_LOCAL_STORAGE_NOTES, updatedNotes);
    }

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
      onClick={useHandleOnClick}
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
