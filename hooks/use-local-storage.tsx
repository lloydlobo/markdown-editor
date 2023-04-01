// Import statements
import { ActionType } from "@/store/AppContext";
import { INote } from "@/types/inote";
import { localStoreGetItem, localStoreRemoveItem, localStoreSaveItem } from "@/utils/localstorage";
import { CreateToastFnReturn, } from "@chakra-ui/react";
import { Dispatch, useEffect } from "react";
import { data } from "@/utils/data";
import { KEY_LOCAL_STORAGE_NOTES } from "@/lib/constants";
import { IAction, IAppState } from "@/store/types";

// Define type for useLocalStorage props
type UseLocalStorageProps = {
  state?: IAppState;
  dispatch: Dispatch<IAction>
  toast: CreateToastFnReturn,
}

/**
 * `useLocalStorage` hook fetches notes from local storage
 * and dispatches them to the store, or loads sample data if none exist in local storage.
 * It also displays a user message accordingly.
 *
 * @param dispatch - A Redux dispatch function used to dispatch actions to the store.
 * @param toast - A function from Chakra UI that can display toasts to the user.
 */
export function useLocalStorage({ dispatch, toast }: UseLocalStorageProps) {
  useEffect(() => {
    const resetLocalStorage = false; // Set to true to reset for debugging.
    if (resetLocalStorage) {
      localStoreRemoveItem(KEY_LOCAL_STORAGE_NOTES);
    }
    // Get notes from local storage.
    const localStorageData: INote[] = localStoreGetItem(KEY_LOCAL_STORAGE_NOTES);

    // If notes exist in local storage, dispatch them to the store and show user message.
    if (localStorageData !== null) {
      dispatch({ type: ActionType.FETCH_NOTES, payload: localStorageData });
      dispatch({ type: ActionType.SET_ACTIVE_NOTE, note: localStorageData[0] });

      toast({ title: "Local storage notes found", status: "info", });
    } else {
      // If notes don't exist in local storage, dispatch sample data to store,
      // and save it to local storage, show user message.
      const sampleData = data;

      dispatch({ type: ActionType.FETCH_NOTES, payload: sampleData });
      dispatch({ type: ActionType.SET_ACTIVE_NOTE, note: sampleData[0] });

      localStoreSaveItem(KEY_LOCAL_STORAGE_NOTES, sampleData);

      toast({ title: "Loading sample data", status: "info", });
    }
  }, []); // Only run once on mount.
}
