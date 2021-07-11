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
import { AddEvent } from "./components/addevent/AddEvent"
import { ReviewForm } from "./components/reviewform/ReviewForm"
import { VolunteerCard } from "./components/reviewform/VolunteerCard"
import { Post } from "./components/Post.jsx"
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
                        <Route exact path="/addevent" component={AddEvent} />
                        <Route exact path="/reviewform" component={ReviewForm} />
                        <Route exact path={["/profile" , "/profile/dashboard"]} component={Dashboard} />
                        <Route exact path="/eventsinfo" component={EventInfo} />
                        <Route exact path="/profile/VolunteerForm" component={VolunteerForm} />
                        <Route exact path="/profile/ReportSubmission" component={ReportSubmission} />
                        <Route exact path="/reviewform" component={ReviewForm} />
                        <Route exact path="/post" component={Post} />
                        <Route exact path="/volunteercard" component={VolunteerCard} />
                    </Switch>
                    <Footer />
                </Router>
            </AuthProvider>
        </>
    );
}

export default App;


/*
coordinator32@gmail.com is email for coordinator
admin32@gmail.com is email for admin 
*/