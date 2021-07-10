import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <>
            <div>
                {/* <!-- Footer --> */}
                <footer className="text-center text-white head">
                    {/* <!-- Grid container --> */}
                    <div className="container">
                        {/* <!-- Section: Links --> */}
                        <section>
                            {/* <!-- Grid row--> */}
                            <div class="row text-center d-flex justify-content-center pt-2">
                            {/* <!-- Grid column --> */}
                            <div class="col-md-2">
                                <h6 class="text-uppercase font-weight-bold padbot">
                                <a href="#!" class="text-white">About us</a>
                                </h6>
                            </div>
                            {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold padbot">
                                        <a href="#!" className="text-white">Products</a>
                                    </h6>
                                </div>
                                {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold padbot">
                                        <a href="#" className="text-white">Awards</a>
                                    </h6>
                                </div>
                                {/* <!-- Grid column -->

                            <!-- Grid column --> */}
                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold padbot">
                                        <a href="#!" className="text-white">Help</a>
                                    </h6>
                                </div>
                                {/* <!-- Grid column -->

                            <!-- Grid column --> */}
                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold padbot">
                                        <a href="#!" className="text-white">Contact</a>
                                    </h6>
                                </div>
                            </div>
                        </section>
                        <hr class="my-3" />

                        <section class="mb-3">
                            <div class="row d-flex justify-content-center">
                            <div class="col-lg-8">
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                distinctio earum repellat quaerat voluptatibus placeat nam,
                                commodi optio pariatur est quia magnam eum harum corrupti
                                dicta, aliquam sequi voluptate quas.
                                </p>
                            </div>
                            </div>
                        </section>
                        <section class="text-center">
                            <a href="" class="text-white me-4">
                            <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="" className="text-white me-4">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="" className="text-white me-4">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="" className="text-white me-4">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="" className="text-white me-4">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="" className="text-white me-4">
                                <i className="fab fa-github"></i>
                            </a>
                        </section>

                    </div>


                        {/* <!-- Copyright --> */}
                        <div class="text-center p-3 foot">
                        © 2021 Copyright:
                        <a class="text-white" href="https://mdbootstrap.com/">Youngistaan Foundation</a>
                        </div>
                    </footer>
                    </div>
        </>
    )
}
