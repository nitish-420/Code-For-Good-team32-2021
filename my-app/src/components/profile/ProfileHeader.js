import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'

export const ProfileHeader = () => {
    const [error, setError] = useState('');
    const { logOut , user } = useAuth();

    let history = useHistory();

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

    return (
        <>
            <div class="container-fluid dashblock bg-light d-flex flex-wrap">
                <button className="btn text-white" onClick={() => {
                    history.push('/profile/dashboard')
                }}>
                    Dashboard
                </button>
                <button className="btn text-white" onClick={() => {
                    history.push('/profile/VolunteerForm')
                }}>
                    Volunteer Form
                </button>
                <button className="btn text-white" onClick={() => {
                    history.push('/profile/ReportSubmission')
                }}>
                    Report Submission
                </button>
                {
                    error ? error : null
                }
                {
                    user ? <button className="btn btn-danger ms-auto" onClick={() => { handleLogOut() }}>
                        Logout
                    </button> : null
                }
            </div>

        </>
    )
}