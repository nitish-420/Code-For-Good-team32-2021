import React, { useState , useEffect } from "react";
import ReactDOM from "react-dom";
import './Homepage.css'
import axios from 'axios'

export const Homepage = () => {
    const [img1 , setImg1] = useState('');
    const [img2 , setImg2] = useState('');
    const [img3 , setImg3] = useState('');
    
    useEffect(() => {
        axios.get('/home/events/upcoming')
            .then((res) => {
                // console.log("corusel " , res.data[0].images);
                setImg2(res.data[1].images[0]);
                setImg1(res.data[0].images[0]);
                setImg3(res.data[2].images[0]);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="px-4 p-sm-0 customBg">
            <div className="hello">
            <section id="testimonials">
                <h1>Upcoming Events</h1>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="6000">
                <div classNameName="carousel-inner">
                    <div className="carousel-item active">
                    <img className="testImg img-fluid w-100 h-auto m-0" src={img1} alt="img1"></img>
                    </div>
                    <div className="carousel-item">
                        <img  className="testImg img-fluid w-100 h-auto m-0" src={img2} alt="img2"></img>
                    </div>
                    <div className="carousel-item">
                        <img  className="testImg img-fluid w-100 h-auto m-0" src={img3} alt="img3"></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </section>
                <section id="pricing" style={{margin: "20px"}}>
                    <h2>Our Top 3 Volunteers of the month</h2>
                    <p className="para2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, consectetur..</p>
                    <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="card pricing-col">
                        <div className="card-header"><h3 className="pheader">Name 2</h3></div>
                        <div className="card-body">
                            <h2 className="card-title">lorem</h2>
                            <p className="card-text para3">Lorem ipsum dolor sit.</p>
                            <p className="card-text para3">Lorem ipsum dolor sit.</p>
                            <p className="card-text para3">Lorem ipsum dolor sit.</p>
                            <div className="d-grid gap-2">
                                <button className="btn btn-outline-dark" type="button">Sign Up</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card pricing-col">
                        <div className="card-header"><h3 className="pheader">Name 1</h3></div>
                        <div className="card-body">
                            <h2 className="card-title">lorem</h2>
                            <p className="card-text para3">Lorem ipsum dolor sit.</p>
                            <p className="card-text para3">Lorem ipsum dolor sit.</p>
                            <p className="card-text para3">Lorem ipsum dolor sit.</p>
                            <div className="d-grid gap-2">
                                <button className="btn btn-dark" type="button">Sign Up</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card pricing-col">
                        <div className="card-header"><h3 className="pheader">Name3</h3></div>
                        <div className="card-body">
                            <h2 className="card-title">lorem</h2>
                            <p className="card-text para3">Lorem ipsum dolor sit</p>
                            <p className="card-text para3">Lorem ipsum dolor sit</p>
                            <p className="card-text para3">Lorem ipsum dolor sit</p>
                            <div className="d-grid gap-2">
                                <button className="btn btn-dark" type="button">Sign Up</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                </section>
                <section id="features">
                <div className="row marbot">
                <div className="col-lg-4 feature1">
                    <i className="icon fas fa-check-circle fa-4x"></i>
                    <h3 className="h31">Feature 1.</h3>
                    <p className="para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, magni..</p>
                </div>
                <div  className="col-lg-4 feature1">
                    <i className="icon fas fa-bullseye fa-4x"></i>
                    <h3 className="h31">Feature 2.</h3>
                    <p className="para1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div  className="col-lg-4 feature1">
                    <i className="icon fas fa-address-book fa-4x"></i>
                    <h3 className="h31">Feature 3.</h3>
                    <p className="para1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, quia.</p>
                </div>
                </div>
            </section>
            </div>
        </div>
    );
};