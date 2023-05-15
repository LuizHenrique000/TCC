import './app.css';
import AppRoutes  from '../routes.jsx';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import NewProfilePage from './pages/NewProfile';
import BusSchedule from './components/bus_schedule/BusSchedule';
import { AuthStorage } from './context/AuthContext';

function App() {
  return (
    <div>
     <AuthStorage>
      <AppRoutes>
        <LoginPage path="/" />
        <NewProfilePage path="/cadastro" />
        <HomePage path="/home" />
        <BusSchedule path="/schedule" />
      </AppRoutes>
      </AuthStorage>
    </div>
  );
}

export default App;