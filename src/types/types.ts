type User = {
  email : string,
  type : "patient" | "volunteer" | "nurse",
  isActive : boolean
};


export type Theme =  "light" | "dark";
export type PatientTabState = "Home" | "About" | "Team" | "Learn"|"Volunteers";

export type VolunteerTabState="Home" | "About" | "Team" | "Learn"|"Volunteers";
export default User;