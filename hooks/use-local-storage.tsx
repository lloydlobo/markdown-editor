// Import statements
import { ActionType } from "@/store/AppContext";
import { INote } from "@/types/inote";
import { localStoreGetItem, localStoreRemoveItem, localStoreSaveItem } from "@/utils/localstorage";
import { CreateToastFnReturn, } from "@chakra-ui/react";
import { Dispatch, useEffect } from "react";
// import data from "@/utils/data.json";
import { data } from "@/utils/data";
import { KEY_LOCAL_STORAGE_NOTES } from "@/lib/constants";
import { IAction } from "@/store/types";

// Define type for useLocalStorage props
type UseLocalStorageProps = {
  dispatch: Dispatch<IAction>
  toast: CreateToastFnReturn,
}

/**
 * Define custom hook useLocalStorage
 * This custom hook fetches notes from local storage and dispatches them to the store, or loads sample data if none exist in local storage. It also displays a user message accordingly.
*/
export function useLocalStorage({ dispatch, toast }: UseLocalStorageProps) {
  useEffect(() => {
    // reset for debugging
    // localStoreRemoveItem(KEY_LOCAL_STORAGE_NOTES);

    // Get notes from local storage
    const localStorageData: INote[] = localStoreGetItem(KEY_LOCAL_STORAGE_NOTES);

    // If notes exist in local storage, dispatch them to the store and show user message
    if (localStorageData !== null) {
      dispatch({ type: ActionType.FETCH_NOTES, payload: localStorageData });

      toast({ title: "Local storage notes found", status: "info", duration: 3000, isClosable: true, });
      dispatch({ type: ActionType.SET_ACTIVE_NOTE, payload: localStorageData[0] });
    } else {
      // If notes don't exist in local storage, dispatch sample data to store and save it to local storage, show user message
      dispatch({ type: ActionType.FETCH_NOTES, payload: data });
      localStoreSaveItem(KEY_LOCAL_STORAGE_NOTES, data);
      dispatch({ type: ActionType.SET_ACTIVE_NOTE, payload: data[0] });

      toast({ title: "Loading sample data", status: "info", duration: 3000, isClosable: true, });
    }

  }, []);
}

