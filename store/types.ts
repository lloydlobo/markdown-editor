import { INote } from "@/types/inote";
import { ActionType } from "./AppContext";

export type AppContextProviderProps = { children: React.ReactNode };

export interface IAppState {
  notes: Array<INote> | null;
  activeNote: INote | null;
  selectedNotes: Array<INote> | null;
  unsavedData: boolean,
  isPreview: boolean,
}
export type IAction = {
  type: ActionType;
  note?: INote;
  payload?: any;
};

export interface IAppContext {
  state: IAppState;
  dispatch: React.Dispatch<IAction>;
}
