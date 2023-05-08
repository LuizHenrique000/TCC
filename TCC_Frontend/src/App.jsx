import './app.css';
import  AppRoutes  from '../routes.jsx';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import NewProfilePage from './pages/NewProfile';

export default function App() {
  return (
    <div>
      <AppRoutes>
        <HomePage />
        <NewProfilePage />
        <HomePage />
      </AppRoutes>
    </div>
  );
}
