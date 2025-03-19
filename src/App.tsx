import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router";
import Login from "./Pages/Login";
import PatientDashboard from "./Pages/PatientDashboard";
import NurseDashboard from "./Pages/NurseDashbaord";
import VolunteersDashboard from "./Pages/VolunteersDashboard"
import About from "./Pages/About";
import Team from "./Pages/Team";
import Learn from "./Pages/Learn";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />}  />
        <Route path="/nurse" element={<NurseDashboard />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/patient/about" element={<About />} />
        <Route path="/patient/team" element={<Team />} />
        <Route path="/patient/learn" element={<Learn />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/volunteers" element={<VolunteersDashboard />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
