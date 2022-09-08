import { createContext } from "react";
import { Mode, Profile } from "../App";

export interface IContextValue {
  mode: Mode;
  profile: Profile;
  onChangeMode: (mode: Mode) => void;
}

export const SuperContext = createContext<IContextValue>(null as any);
