import { create } from "zustand";
import createSelectors from "./createSelectors";
import User from "@/types/types";

interface UserState {
  currentUser: User | null;
  setCurrentUser : (user : User | null) => void;
}

const useUserStoreBase = create<UserState>((set) => ({
  currentUser : null,
  setCurrentUser : (user : User | null) => set({currentUser : user})
}));

const useUserStore = createSelectors(useUserStoreBase);

export default useUserStore;
