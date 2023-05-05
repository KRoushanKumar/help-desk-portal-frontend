import React, { useState } from 'react';
import userPic from "../../../Assets/images/userimage.jpg"

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
    return (
        <>
            <div className='container emp-profile'>
                <form>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='profile-img'>
                                <img src={userPic} alt='user pic' />
                            </div>
                        </div>

                        <div className='col-md-5'>
                            <div className='profile-head mt-4'>
                                <h3>Alok Kumar</h3>
                                {/* role */}
                                <h5> Senior Software developer</h5>

                                <div className='row mt-3'>
                                        <div className='col-md-3'>
                                            <h6>User ID : </h6>
                                        </div>
                                        <div className='col-md-9'>
                                            <p>12453687</p>
                                        </div>
                                    </div>

                                    <div className='row mt-2'>
                                        <div className='col-md-3'>
                                        <h6>User Name : </h6>
                                        </div>
                                        <div className='col-md-9'>
                                            <p>Alok21</p>
                                        </div>
                                    </div>

                                    <div className='row mt-2'>
                                        <div className='col-md-3'>
                                        <h6>Full Name : </h6>
                                        </div>
                                        <div className='col-md-9'>
                                            <p>Alok Kumar</p>
                                        </div>
                                    </div>

                                    <div className='row mt-2'>
                                        <div className='col-md-3'>
                                        <h6>Email ID : </h6>
                                        </div>
                                        <div className='col-md-9'>
                                            <p>alok@gmail.com</p>
                                        </div>
                                    </div>


                            </div>
                        </div>

                        <div className='col-md-3'>
                            <button className='btn btn-info mt-5'>Edit Profile</button><br/>
                            <button className='btn btn-danger mt-2'>Log Out</button>
                        </div>

                    </div>

                    <div className='row'>
                    <h5>PROFILE LINKS : </h5>
                        <div className='col-md-4'>
                            <div className='profile-work'>
                                <a href='https://www.w3schools.com/bootstrap/bootstrap_navbar.asp' target='_social'>Youtube</a><br />
                                <a href='https://www.w3schools.com/bootstrap/bootstrap_navbar.asp' target='_social'>Instagram</a><br />
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='profile-work'>
                                <a href='https://www.w3schools.com/bootstrap/bootstrap_navbar.asp' target='_social'>LinkedIn</a><br />
                                <a href='https://www.w3schools.com/bootstrap/bootstrap_navbar.asp' target='_social'>Twitter</a><br />
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='profile-work'>
                                <a href='https://www.w3schools.com/bootstrap/bootstrap_navbar.asp' target='_social'>Facebook</a><br />
                            </div>
                        </div>

                    </div>

                </form>
            </div>
        </>
    );
};

export default About;