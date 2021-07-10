import React from "react";
import ReactDOM from "react-dom";
import './Homepage.css'

export const Homepage = () => {
    return (
        <div class="px-4 p-sm-0 customBg">
            <div class="hello">
            <section id="testimonials">
                <h1>Upcoming Events</h1>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="6000">
                <div className="carousel-inner">
                    <div class="carousel-item active">
                    <img  class="testImg" src="#" alt="img1"></img>
                    </div>
                    <div class="carousel-item">
                    <img  class="testImg" src="#" alt="img2"></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </section>
            <section id="pricing">
                    <h2>Our Top 3 Volunteers of the month</h2>
                    <p class="para2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, consectetur..</p>
                    <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="card pricing-col">
                        <div class="card-header"><h3 class="pheader">Name 2</h3></div>
                        <div class="card-body">
                            <h2 class="card-title">lorem</h2>
                            <p class="card-text para3">Lorem ipsum dolor sit.</p>
                            <p class="card-text para3">Lorem ipsum dolor sit.</p>
                            <p class="card-text para3">Lorem ipsum dolor sit.</p>
                            <div class="d-grid gap-2">
                                <button class="btn btn-outline-dark" type="button">Sign Up</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="card pricing-col">
                        <div class="card-header"><h3 class="pheader">Name 1</h3></div>
                        <div class="card-body">
                            <h2 class="card-title">lorem</h2>
                            <p class="card-text para3">Lorem ipsum dolor sit.</p>
                            <p class="card-text para3">Lorem ipsum dolor sit.</p>
                            <p class="card-text para3">Lorem ipsum dolor sit.</p>
                            <div class="d-grid gap-2">
                                <button class="btn btn-dark" type="button">Sign Up</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card pricing-col">
                        <div class="card-header"><h3 class="pheader">Name3</h3></div>
                        <div class="card-body">
                            <h2 class="card-title">lorem</h2>
                            <p class="card-text para3">Lorem ipsum dolor sit</p>
                            <p class="card-text para3">Lorem ipsum dolor sit</p>
                            <p class="card-text para3">Lorem ipsum dolor sit</p>
                            <div class="d-grid gap-2">
                                <button class="btn btn-dark" type="button">Sign Up</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                </section>
                <section id="features">
                <div class="row marbot">
                <div class="col-lg-4 feature1">
                    <i class="icon fas fa-check-circle fa-4x"></i>
                    <h3 class="h31">Feature 1.</h3>
                    <p class="para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, magni..</p>
                </div>
                <div  class="col-lg-4 feature1">
                    <i class="icon fas fa-bullseye fa-4x"></i>
                    <h3 class="h31">Feature 2.</h3>
                    <p class="para1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div  class="col-lg-4 feature1">
                    <i class="icon fas fa-address-book fa-4x"></i>
                    <h3 class="h31">Feature 3.</h3>
                    <p class="para1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, quia.</p>
                </div>
                </div>
            </section>
            </div>
        </div>
    );
};