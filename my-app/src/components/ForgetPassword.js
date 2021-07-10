// import React,  from 'react';
import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'
import './ForgetPassword.css'
// import { GoogleLoginButton  } from "react-social-login-buttons";

export const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    let history = useHistory();
    const { logIn } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await logIn(email, password, confirmpassword);
        } catch (err) {
            setError(err.message);
        }

        setLoading(false);
    };

    return (
        <div className="px-4 p-sm-0 customBg">

        <div className="maincontainer">
        <div class="container-fluid">
            <div class="row no-gutter">
               
                <div class="col-md-6 d-none d-md-flex bg-image"></div>


                
                <div class="col-md-6 bg-light">
                    <div class="login d-flex align-items-center py-5">

                       
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-10 col-xl-7 mx-auto">
                                    <h6 class="display-4">Forget Password</h6>
                                    <form>
                                        <div className="form-group">
                                            <label className="cs-label">Email address</label>
                                            <input type="email" className="form-control" placeholder="Enter email" />
                                        </div>

                                        <div className="form-group">
                                            <label className="cs-label">Password</label>
                                            <input type="password" className="form-control" placeholder="Enter password" />
                                        </div>

                                        <div className="form-group">
                                            <label className="cs-label">Confirm Password</label>
                                            <input type="password" className="form-control" placeholder="Enter password again" />
                                        </div>

                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label cs-label" htmlFor="customCheck1">Remember me</label>
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                                        {/* <h4 className="or-but">Or</h4>
                                        <hr></hr>
                                        
                                        <GoogleLoginButton onClick={() => alert("Hello")} />
                                        <button type="button" className="btn btn-block my-btn">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXzjrCnImh_g4h5dbdki5P9ZN124UPnCGPA&usqp=CAU" height="35px" />
                                           <span className="loginmob">Log in with Mobile</span> 
                                            </button> */}

                                        {/* <p className="forgot-password text-right">
                                            <a href="#">Forgot password?</a>
                                        </p> */}
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
      </div>
{/* */}

        </div>
    );
};
