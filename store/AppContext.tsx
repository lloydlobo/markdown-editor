import React from "react";

import { INote } from "@/types/inote";
import { noteReducer } from "./note-reducer";
import { AppContextProviderProps, IAppContext, IAppState } from "./types";

/**
 *
 * https://codesandbox.io/s/react-typescript-context-usereducer-mlmpm?file=%2Fsrc%2FAppContext.tsx
 *
 * # Reducers
 *
 * - SET_ACTIVE_NOTE
 * - TOGGLE_PREVIEW
 *
 * - UPDATE_NOTE_NAME
 * - SAVE_CHANGES
 *
 * - INSERT_NOTE
 * - LOAD_NOTES
 * - UPDATE_MARKDOWN
 * - DELETE_NOTE
 */
export enum ActionType {
  SET_ACTIVE_NOTE = "SET_ACTIVE_NOTE",
  TOGGLE_PREVIEW = "TOGGLE_PREVIEW",
  SAVE_CHANGES = "SAVE_CHANGES",
  UPDATE_NOTE_NAME = "UPDATE_NOTE_NAME",
  ADD_NOTE = "ADD_NOTE",
  DELETE_NOTE = "DELETE_NOTE",
  UPDATE_MARKDOWN = "UPDATE_MARKDOWN",
  SELECT_ADD_NOTE = "SELECT_ADD_NOTE",
  SELECT_ALL = "SELECT_ALL",
  SELECT_NONE = "SELECT_NONE",
  FETCH_NOTES = "FETCH_NOTES",
  SELECT_LAST_NOTE = "SELECT_LAST_NOTE",
}

const initialState: IAppState = {
  notes: null as Array<INote> | null,
  activeNote: null as INote | null,
  selectedNotes: null as Array<INote> | null,
  unsavedData: false,
  isPreview: false,
}

const AppContext = React.createContext<IAppContext>({
  state: {
    notes: null as Array<INote> | null,
    activeNote: null as INote | null,
    selectedNotes: null as Array<INote> | null,
    unsavedData: false,
    isPreview: false,
  },
  dispatch: () => { },
});

function AppContextProvider({ children }: AppContextProviderProps) {
  const [state, dispatch] = React.useReducer(
    noteReducer,
    initialState as IAppState
  );
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppContextProvider };
