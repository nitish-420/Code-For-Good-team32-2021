import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'

export const Header = () => {
    const [error, setError] = useState('');
    const { user, logOut } = useAuth();

    console.log(user);
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
        // <div className="navbar d-flex fw-bold customBg1">
        //     <div className="mx-2">
        //         <span className="timer-responsive">CF</span>
        //         <span className="timer-responsive">Knockout</span>
        //     </div>
        //     {
        //         (error) ? <div className="alert alert-danger" role="alert">{error}</div> : ''
        //     }
        //     <div className="ms-auto">
        //         {
        //             user ? <button className="btn btn-danger mx-3 text-responsive" onClick={() => handleLogOut()} >LogOut</button> : null
        //         }
        //     </div>
        // </div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            {
                (error) ? <div className="alert alert-danger" role="alert">{error}</div> : ''
            }
            <div class="container-fluid">
                <a class="navbar-brand"   href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page"   href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" >Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"  href="#">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#"> Action</a></li>
                                <li><a class="dropdown-item"  href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item"  href="#">Something else here</a></li>
                            </ul>
                        </li>
                        {
                            user ? <button className="btn btn-danger mx-3 text-responsive" onClick={() => handleLogOut()} >LogOut</button> : null
                        }
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}