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
                setImg2(res.data[1].images[0]);
                setImg1(res.data[0].images[0]);
                setImg3(res.data[2].images[0]);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="px-4 p-sm-0 customBg">
            <div className="hello">
            <div className="text-center testimonials1 fw-bolder fs-1 mt-0">Upcoming Events</div>
            <section id="testimonials">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="6000">
                <div classNameName="carousel-inner">
                    <div className="carousel-item active">
                    <img className="testImg img-fluid w-auto m-0" src={img1} alt="img1" style={{height:"500px"}}></img>
                    </div>
                    <div className="carousel-item">
                        <img  className="testImg img-fluid w-auto m-0" src={img2} alt="img2" style={{height:"500px"}}></img>
                    </div>
                    <div className="carousel-item">
                        <img  className="testImg img-fluid w-auto m-0" src={img3} alt="img3" style={{height:"500px"}}></img>
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
                        <div className="card-header"><h3 className="pheader">Nick</h3></div>
                        <div className="card-body">
                            <img className="rounded" src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" style={{height:"100px"}}></img>
                            {/* <h2 className="card-title">lorem</h2>
                            <p className="card-text para3">Lorem ipsum dolor sit.</p>
                            <p className="card-text para3">Lorem ipsum dolor sit.</p>
                            <p className="card-text para3">Lorem ipsum dolor sit.</p> */}
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card pricing-col">
                        <div className="card-header"><h3 className="pheader">John</h3></div>
                        <div className="card-body">
                        <img className="rounded" src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" style={{height:"100px"}}></img>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card pricing-col">
                        <div className="card-header"><h3 className="pheader">Daniel</h3></div>
                        <div className="card-body">
                        <img className="rounded" src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" style={{height:"100px"}}></img>
                        </div>
                        </div>
                    </div>
                    </div>

                </section>
            </div>
        </div>
    );
};