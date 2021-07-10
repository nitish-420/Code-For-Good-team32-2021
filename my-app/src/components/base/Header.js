import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'
import './Header.css'

export const Header = () => {
    let history = useHistory();
    let { user } = useAuth();
    let email = '';
    if (user) {
        email = user.email;
    }

    return (
        <section id="title">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md navbar-dark">
                    <a class="navbar-brand" href="#">logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#footer">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={() => {
                                    history.push('/events')
                                }}>Events</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#testimonials">Community</a>
                            </li>
                            {
                                (email !== "admin32@gmail.com") ? <li class="nav-item">
                                    <a class="nav-link" onClick={() => {
                                        history.push('/profile');
                                    }}>Profile</a>
                                </li> :
                                <li class="nav-item">
                                    <a class="nav-link" onClick={() => {
                                        history.push('/addEvent');
                                    }}>Add Event</a>
                                </li>
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    )
}