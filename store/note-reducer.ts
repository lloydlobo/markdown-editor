import { ActionType } from "./AppContext";
import { IAction, IAppState } from "@/store/types";
import { INote } from "@/types/inote";

export function noteReducer(state: IAppState, action: IAction): IAppState {
  if (process.env.NODE_ENV === "development") {
    console.log(`development:`, `noteReducer called: ${action.type}`);
  }

  switch (action.type) {
    case ActionType.FETCH_NOTES: {
      const payload = action?.payload;
      if (typeof payload === typeof state.notes) {
        return { ...state, notes: payload as Array<INote> };
      }
    }
    case ActionType.SET_ACTIVE_NOTE: {
      state.unsavedData = false;
      const notes = state.notes;
      const newActiveNote = notes?.find(
        (note) => note.nanoid === action.note?.nanoid
      );
      if (newActiveNote) {
        return { ...state, activeNote: newActiveNote, isPreview: false };
      }
      return { ...state };
    }
    case ActionType.UPDATE_NOTE_NAME: {
      if (!state.activeNote)
        throw Error("noteReducer called: Note is not active: " + action.type);
      // HACK: Chances of error here. if user updates docs aswell as title.
      if (typeof action.note !== "undefined") {
        return {
          ...state,
          unsavedData: true,
          activeNote: { ...state.activeNote, title: action.note?.title }, // This could be action.note.
        };
      } else {
        throw Error(
          "noteReducer called: Undefined action payload: " + action.type
        );
      }
    }
    case ActionType.UPDATE_MARKDOWN: {
      if (!state.activeNote)
        throw Error("noteReducer called: Note is not active: " + action.type);
      if (typeof action.note === "undefined")
        throw Error(
          "noteReducer called: Undefined action payload: " + action.type
        );
      return {
        ...state,
        activeNote: { ...state.activeNote, content: action.note?.content },
        unsavedData: true,
      };
    }
    case ActionType.ADD_NOTE: {
      if (typeof action.note !== "undefined") {
        if (state.notes !== null) {
          state.notes = [...state.notes, action.note];
        }
        return {
          ...state,
          unsavedData: false,
          isPreview: false,
          activeNote: action.note,
          notes: state.notes,
        };
      }
    }
    case ActionType.DELETE_NOTE: {
      if (!state.notes)
        throw Error(
          "noteReducer called: No notes left to delete: " + action.type
        );
      const newNotes = state.notes.filter(
        (note) => note.nanoid !== action.note?.nanoid
      );
      if (state.notes.length > 0) {
        return { ...state, notes: newNotes, activeNote: newNotes[0] };
      } else {
        return { ...state, activeNote: null };
      }
    }
    case ActionType.SAVE_CHANGES: {
      if (state.notes !== null && typeof action.note !== "undefined") {
        const savedNotes = state.notes.map((note) => {
          if (note.nanoid === action.note?.nanoid) {
            return action.note;
          }
          return note;
        });
        return { ...state, notes: savedNotes };
      }
    }
    case ActionType.TOGGLE_PREVIEW: {
      return { ...state, isPreview: !state.isPreview };
    }
    case ActionType.TOGGLE_CODEMIRROR: {
      return { ...state, isCodemirror: !state.isCodemirror };
    }
    default:
      throw Error("noteReducer called: Unknown action: " + action.type);
  }
}
