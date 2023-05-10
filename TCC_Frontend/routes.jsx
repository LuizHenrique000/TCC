import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./src/pages/Login"
import NewProfilePage from "./src/pages/NewProfile";
import HomePage from "./src/pages/Home";
import BusSchedulePage from "./src/pages/BusSchedule";

const AppRoutes = () => {
    return (    
        <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} exatly />
          <Route path="/cadastro" element={<NewProfilePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/schedule" element={<BusSchedulePage />} />
        </Routes>
      </Router>
    )
 }
 
 export default AppRoutes;
