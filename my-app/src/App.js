import './App.css';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/base/Header'
import { LogIn } from "./components/auth/LogIn";
import { SignUp } from "./components/auth/SignUp";
import { Homepage } from "./Homepage";
import { Events } from "./components/events/Events";
import { EventInfo } from "./components/events/EventsInfo";
import { Footer } from "./components/base/Footer";
import { Dashboard } from "./components/profile/Dashboard"
import { VolunteerForm } from "./components/profile/VolunteerForm"
import { ReportSubmission } from "./components/profile/ReportSubmission"
import { EventRegister } from "./components/forms/EventRegister"

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
                        <Route exact path="/eventsinfo" component={EventInfo} />
                        <Route exact path="/volunteerform" component={VolunteerForm} />
                        <Route exact path="/eventregister" component={EventRegister} />
                        <Route exact path="/reportsubmissionform" component={ReportSubmission} />
                    </Switch>
                    <Footer />
                </Router>
            </AuthProvider>
        </>
    );
}

export default App;
