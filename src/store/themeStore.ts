import { create } from "zustand";
import createSelectors from "./createSelectors";
import { Theme } from "../types/types";

interface ThemeState {
  theme : Theme,
  setTheme : (theme : Theme) => void; 
}

const useThemeStoreBase = create<ThemeState>((set) => ({
  theme : "light",
  setTheme : (theme :  Theme) => set({theme : theme})
}));

const useThemeStore = createSelectors(useThemeStoreBase);

export default useThemeStore;