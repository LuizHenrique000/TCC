import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./src/pages/Login"
import NewProfilePage from "./src/pages/NewProfile";
import HomePage from "./src/pages/Home";

const AppRoutes = () => {
    return (    
        <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<NewProfilePage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    )
 }
 
 export default AppRoutes;
