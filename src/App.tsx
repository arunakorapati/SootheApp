import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router";
import Login from "./Pages/Login";
import PatientDashboard from "./Pages/PatientDashboard";
import NurseDashboard from "./Pages/NurseDashbaord";
import VolunteersDashboard from "./Pages/VolunteersDashboard"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/nurse" element={<NurseDashboard />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/volunteers" element={<VolunteersDashboard />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
