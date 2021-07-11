import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./ReviewForm.css";

export const ReviewForm = () => {
    return (
        <div>
            <div className="px-4 p-sm-0 customBg">
                <div className="maincontainer">
                    {/* <div className="container-fluid"> */}
                    <div className="row innerrow bg-white shadow rounded overflow-hidden">
                        {/* <div className=""> */}
                        <div className="px-4 py-3">
                            <div className="d-flex align-items-center justify-content-between mb-3 heads">
                                <h5 className="mb-0 ">Volunteer List</h5>
                            </div>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Volunteer Name</th>
                                        <th scope="col">Event</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>
                                            <Link to="/volunteercard#Mark">
                                                Mark
                                            </Link>
                                        </td>
                                        <td>Crime Security</td>
                                        <td>
                                            Approved
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Gender Equality Program</td>
                                        <td>Disapproved</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>Approved</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Gender Equality Program</td>
                                        <td>Approved</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>Approved</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>Approved</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Gender Equality Program</td>
                                        <td>Disapproved</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>Disapproved</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>Gender Equality Program</td>
                                        <td>Approved</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};