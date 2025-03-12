import { create } from "zustand";
import createSelectors from "./createSelectors";

interface ThemeState {
  theme : string | null,
  setTheme : (theme : string) => void; 
}

const useThemeStoreBase = create<ThemeState>((set) => ({
  theme : "dark",
  setTheme : (theme) => set({theme : theme})
}));

const useThemeStore = createSelectors(useThemeStoreBase);

export default useThemeStore;
