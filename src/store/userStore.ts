
import { create } from "zustand";
import createSelectors from "./createSelectors";
import User, { PatientTabState,VolunteerTabState } from "@/types/types";


interface UserState {
  currentUser: User | null;
  patientTab : PatientTabState;
  setCurrentUser : (user : User | null) => void;
  setPatientTab : (state : PatientTabState) => void;
  setVolunteersTab: (state:VolunteerTabState)=>void;
}

const useUserStoreBase = create<UserState>((set) => ({
  currentUser : null,
  patientTab : "Home",
  setPatientTab : (state : PatientTabState) => set({patientTab : state}),
  setVolunteersTab : (state : PatientTabState) => set({patientTab : state}),
 setCurrentUser : (user : User | null) => set({currentUser : user})
}));

const useUserStore = createSelectors(useUserStoreBase);

export default useUserStore;
