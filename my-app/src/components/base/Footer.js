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
                                Youngistaan, synonymous to the land of young people, is inspired by a bustling crowd of around 356 million young people of India. The potential of our young people is to create a better future to makes India a land of opportunity and good change. We, at Youngistaan Foundation which is based in Hyderabad, are fuelled by the desire to change the world by touching lives one at a time.
<br/>Join us with this cause on our social media and by volunteering on our page.
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
