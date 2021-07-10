import React from 'react';
import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'
import './LogIn.css'
// import { GoogleLoginButton  } from "react-social-login-buttons";

export const LogIn = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    let history = useHistory();
    const { logIn, signInWithGoogle } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            console.log(emailRef.current.value, passwordRef.current.value);

            await logIn(emailRef.current.value, passwordRef.current.value);
        } catch (err) {
            setError(err.message);
        }

        setLoading(false);
    };

    const handleGoogle = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await signInWithGoogle();
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className="px-4 p-sm-0 customBg">
            {/* <div className="container-fluid d-grid">
                <div className="row justify-content-center align-items-center p-0">
                    <div className="col-12 col-sm-6 col-md-5 form-container" id="login-box">
                        <div className="m-0 p-1 border-bottom fs-4 text-light bg-dark" id="text">
                            Login to Code For Good
                        </div>
                        <form id="forms">
                            {
                                (error) ? <div className="alert alert-danger" role="alert">{error}</div> : ''

                            }
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button disabled={loading} onClick={(e) => handleSubmit(e)} className="btn btn-primary">
                                LogIn
                            </button>
                            <Link className="mx-2 btn btn-outline-primary" exact to="/signup">
                                SignUp
                            </Link>
                        </form>
                    </div>
                </div>
            </div> */}

            {/* Login  */}
            



            <div className="maincontainer">
                <div className="container-fluid">
                    <div className="row no-gutter">

                        <div className="col-md-6 d-none d-md-flex bg-image"></div>
                        <div className="col-md-6 bg-light">
                            <div className="login d-flex align-items-center py-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-7 mx-auto">
                                            <h3 className="display-4">LogIn</h3>
                                            <form>
                                                {
                                                    (error) ? <div className="alert alert-danger" role="alert">{error}</div> : ''

                                                }
                                                <div className="form-group">
                                                    <label className="cs-label">Email address</label>
                                                    <input type="email" className="form-control" placeholder="Enter email" ref={emailRef}/>
                                                </div>

                                                <div className="form-group">
                                                    <label className="cs-label">Password</label>
                                                    <input type="password" className="form-control" placeholder="Enter password" ref={passwordRef}/>
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-block" disabled={loading} onClick={(e) => handleSubmit(e)} >Log In</button>
                                                <h4 className="or-but">Or</h4>
                                                <hr></hr>
                                                <button className="btn btn-danger btn-block w-100" onClick={(e) => handleGoogle(e)} >Google</button>
                                                <p className="forgot-password text-right">
                                                    <a href="#">Forgot password?</a>
                                                </p>
                                                <Link className="mx-2 btn btn-outline-primary" exact to="/signup">
                                                    SignUp
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
        </div>
    );
};
