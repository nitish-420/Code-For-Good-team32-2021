import './App.css';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/base/Header'
import { LogIn } from "./components/LogIn";
import { SignUp } from "./components/SignUp";
import { Homepage } from "./Homepage";
import { Events } from "./components/Events";
import { Footer } from "./components/base/Footer";
import { VolunteerForm } from "./components/forms/VolunteerForm"
import {ReportSubmission} from "./components/forms/ReportSubmission"

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
                        <Route exact path="/volunteerform" component={VolunteerForm} />
                        <Route exact path="/reportsubmissionform" component={ReportSubmission} />
                        
                    </Switch>
                    <Footer />
                </Router>
            </AuthProvider>
        </>
    );
}

export default App;
