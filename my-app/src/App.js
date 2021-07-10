import './App.css';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/base/Header'
import { LogIn } from "./components/auth/LogIn";
import { SignUp } from "./components/auth/SignUp";
import { Homepage } from "./Homepage";
import { Events } from "./components/events/Events";
import { Footer } from "./components/base/Footer";
import { Dashboard } from "./components/profile/Dashboard"
import { VolunteerForm } from "./components/profile/VolunteerForm"
import { ReportSubmission } from "./components/profile/ReportSubmission"

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
                        <Route exact path="/home" component={Homepage}/>
                        <Route exact path="/events" component={Events} />
                        <Route exact path={["/profile" , "/profile/dashboard"]} component={Dashboard} />
                        <Route exact path="/profile/VolunteerForm" component={VolunteerForm} />
                        <Route exact path="/profile/ReportSubmission" component={ReportSubmission} />
                    </Switch>
                    <Footer />
                </Router>
            </AuthProvider>
        </>
    );
}

export default App;
