import React from 'react'
import {
    Link
} from "react-router-dom";
import { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import './SignUp.css'
import axios from 'axios';

export const SignUp = () => {
    const history = useHistory();
    let emailRef = useRef();
    let fullNameRef = useRef();
    let phoneNumberRef = useRef();
    let passwordRef = useRef();
    let passwordConfirmRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signUp } = useAuth();

    let handleSubmit = async (e) => {
        e.preventDefault();

        if (!passwordRef || !passwordConfirmRef || passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);
            await signUp(emailRef.current.value, passwordRef.current.value)

            axios.post('/signup', { email: emailRef.current.value, mobile: phoneNumberRef.current.value, username: fullNameRef.current.value })
                .then()
                .catch(err => console.log(err));
            
        } catch (err) {
            setError(err.message)
        }

        setLoading(false);
    }

    return (
        <div className="maincontainer">
            <div class="bg-color">
                <div class="row no-gutter my-cont">

                    <div class="col-md-6 d-none d-md-flex bg-image">
                        {/* <img src="../../../signup.jpeg" class="img" /> */}
                    </div>

                    <div class="col-md-6 bg-light">
                        <div class="login d-flex align-items-center py-5">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-10 col-xl-7 mx-auto">
                                        <h3 class="display-4">Sign Up</h3>
                                        <form>
                                            {
                                                (error) ? <div className="alert alert-danger" role="alert">{error}</div> : ''
                                            }
                                            <div class="form-group mb-3">
                                                <input type="first name" placeholder="Full Name" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" ref={fullNameRef}/>
                                            </div>
                                            
                                            <div class="form-group mb-3">
                                                <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" ref={emailRef}/>
                                            </div>
                                            <div class="form-group mb-3">
                                                <input id="inputEmail" type="number" placeholder="Phone Number" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" ref={phoneNumberRef} />
                                            </div>
                                            <div class="form-group mb-3">
                                                <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" ref={passwordRef} />
                                            </div>
                                            <div class="form-group mb-3">
                                                <input id="inputPassword" type="password" placeholder="Confirm Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" ref={passwordConfirmRef} />
                                            </div>

                                            <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick={(e) => handleSubmit(e)} disabled={loading}>Sign Up</button>

                                            <Link className="mx-2 btn btn-outline-primary" exact to="/login">
                                                LogIn
                                            </Link>
                                            <Link className="mx-2 btn btn-outline-primary" exact to="/events">
                                                Events
                                            </Link>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>



    )
}


/*
1. LogIn
2. SignUp
3. Responsive Header
4. Footer
*/