import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'
import './Header.css'
import logo from '../../images/logo-final.png';

export const Header = () => {
    let history = useHistory();
    const [error, setError] = useState('');
    const { logOut, user } = useAuth();

    let email = '';
    let userTab = '';

    let handleLogOut = async () => {
        if (window.confirm("Are you sure you want to logout ?")) {
            try {
                await logOut();
                history.push("/");
            } catch (err) {
                setError(err.message);
            }
        }
    }

    if (user) {
        email = user.email;

        if (email === "admin32@gmail.com") {
            userTab = <>
                <li class="nav-item">
                    <a class="nav-link" onClick={() => { history.push('/addevent'); }}>Add Event</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onClick={() => { handleLogOut() }}>Log out</a>
                </li>
            </>
        } else if (email === "coordinator32@gmail.com") {
            userTab = <>
                <li class="nav-item">
                    <a class="nav-link" onClick={() => { history.push('/reviewform'); }}>Review Form</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onClick={() => { handleLogOut() }}>Log out</a>
                </li>
            </>
        } else {
            userTab = <li class="nav-item"><a class="nav-link" onClick={() => { history.push('/profile'); }}>Profile</a></li>
        }
    }

    return (
        <section id="title">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md navbar-dark">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="Logo" height="80px" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" onClick={() => {
                                    history.push('/home');
                                }}>Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={() => {
                                    history.push('/events')
                                }}>Events</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/post">Community</a>
                            </li>
                            {userTab}
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    )
}