import React, { useState } from 'react';

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import userPic from "../../../assets/images/userimage.jpg";
import { useNavigate } from 'react-router-dom';

const AboutEmp = () => {
    const navigate = useNavigate();

    if(!sessionStorage.getItem('UserID'))
    {
        navigate('/')
    }
    
    const Logout = ()=>
    {
        sessionStorage.clear()
        navigate('/')
    }

    return (
        <>
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
                                <h3>Roushan Kumar</h3>
                                {/* role */}
                                <h5>Employee</h5>

                                <div className='row mt-3'>
                                        <div className='col-md-3'>
                                            <h6>User ID : </h6>
                                        </div>
                                        <div className='col-md-9'>
                                            <p>12345</p>
                                        </div>
                                    </div>

                                    <div className='row mt-2'>
                                        <div className='col-md-3'>
                                        <h6>User Name : </h6>
                                        </div>
                                        <div className='col-md-9'>
                                            <p>Rowdy100</p>
                                        </div>
                                    </div>

                                    <div className='row mt-2'>
                                        <div className='col-md-3'>
                                        <h6>Full Name : </h6>
                                        </div>
                                        <div className='col-md-9'>
                                            <p>Roushan Kumar</p>
                                        </div>
                                    </div>

                                    <div className='row mt-2'>
                                        <div className='col-md-3'>
                                        <h6>Email ID : </h6>
                                        </div>
                                        <div className='col-md-9'>
                                            <p>rowdy100@gmail.com</p>
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
        </>
    );
};

export default AboutEmp;