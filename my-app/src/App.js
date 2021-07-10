import logo from './logo.svg';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/base/Header'
import { LogIn } from "./components/LogIn";
import { SignUp } from "./components/SignUp";
import { Events } from "./components/Events";
import { Footer } from "./components/base/Footer";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <>
            <AuthProvider>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path={["/", "/login"]} component={LogIn} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/events" component={Events} />
                    </Switch>
                    <Footer />
                </Router>
            </AuthProvider>
        </>
    );
}

export default App;
