import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <>
            {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
            <div>
                    {/* <!-- Footer --> */}
                    <footer class="text-center text-white head">
                        {/* <!-- Grid container --> */}
                        <div class="container">
                        {/* <!-- Section: Links --> */}
                        <section class="mt-5">
                            {/* <!-- Grid row--> */}
                            <div class="row text-center d-flex justify-content-center pt-5">
                            {/* <!-- Grid column --> */}
                            <div class="col-md-2">
                                <h6 class="text-uppercase font-weight-bold padbot">
                                <a href="#!" class="text-white">About us</a>
                                </h6>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div class="col-md-2">
                                <h6 class="text-uppercase font-weight-bold padbot">
                                <a href="#!" class="text-white">Products</a>
                                </h6>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div class="col-md-2">
                                <h6 class="text-uppercase font-weight-bold padbot">
                                <a href="#" class="text-white">Awards</a>
                                </h6>
                            </div>
                            {/* <!-- Grid column -->

                            <!-- Grid column --> */}
                            <div class="col-md-2">
                                <h6 class="text-uppercase font-weight-bold padbot">
                                <a href="#!" class="text-white">Help</a>
                                </h6>
                            </div>
                            {/* <!-- Grid column -->

                            <!-- Grid column --> */}
                            <div class="col-md-2">
                                <h6 class="text-uppercase font-weight-bold padbot">
                                <a href="#!" class="text-white">Contact</a>
                                </h6>
                            </div>
                            </div>
                        </section>
                        <hr class="my-5" />

                        <section class="mb-5">
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
                        <section class="text-center mb-5">
                            <a href="" class="text-white me-4">
                            <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="" class="text-white me-4">
                            <i class="fab fa-twitter"></i>
                            </a>
                            <a href="" class="text-white me-4">
                            <i class="fab fa-google"></i>
                            </a>
                            <a href="" class="text-white me-4">
                            <i class="fab fa-instagram"></i>
                            </a>
                            <a href="" class="text-white me-4">
                            <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="" class="text-white me-4">
                            <i class="fab fa-github"></i>
                            </a>
                        </section>

                        </div>
                        

                        {/* <!-- Copyright --> */}
                        <div class="text-center p-3 foot">
                        © 2020 Copyright:
                        <a class="text-white" href="https://mdbootstrap.com/"
                            >MDBootstrap.com</a
                            >
                        </div>
                    </footer>
                    </div>
        
        </>
    )
}
