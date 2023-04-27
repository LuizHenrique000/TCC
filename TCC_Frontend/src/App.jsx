import './app.css';
import Login from './components/login/Login';
import NewProfile from './components/new_profile/NewProfile';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <BrowserRouter>
                    <Route exact path="/" component={Login} />
                    <Route path="/cadastro" component={NewProfile} />
                </BrowserRouter>
            </Switch>
        </BrowserRouter>
    );
}