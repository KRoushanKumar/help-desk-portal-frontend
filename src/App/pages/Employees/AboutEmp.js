import React, { useEffect, useState } from 'react';

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import userPic from "../../../assets/images/userimage.jpg";
import { useNavigate } from 'react-router-dom';
import axios from "../../../assets/axios"

const AboutEmp = () => {
    const [empData, setEmpData] = ("");
    const [isError, setIsError] = useState("");
    const empId = sessionStorage.getItem("UserID");
    const empName = sessionStorage.getItem("userName");
    const navigate = useNavigate();
    // console.log("Navigated to about emp page");
    console.log(empId);
    console.log(empName);



    if (!sessionStorage.getItem('UserID')) {
        console.log("user id")
        console.log(sessionStorage.getItem('UserID'));
        navigate('/')
    }

    const Logout = () => {
        sessionStorage.clear()
        navigate('/')
    }

    const getEmployeeApi = async () => {
        try {
            const res = await axios.get(`/getUserByUserId/${sessionStorage.getItem('UserID')}`);
            setEmpData(res.data);
            console.log("working");
        } catch (error) {
            setIsError(error.message);
            console.log("error kaha se aa rha");
        }
    };

    useEffect(
        () => {
            getEmployeeApi();
        }, [])

    return (
        <div className='container emp-profile'>
            <div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='profile-img'>
                            <img src={userPic} alt='user pic' />
                        </div>
                    </div>

                    <div className='col-md-5' >
                        <div className='profile-head mt-4'>
                            {
                                empData ?.map((employeeData) =>
                                (<>
                                  <h3>{employeeData.firstName} {employeeData.lastName}</h3>
                            
                                    <h5>Employee</h5>

                                    <div className='row mt-3'>
                                        <div className='col-md-3'>
                                            <h6>User ID : </h6>
                                        </div>
                                        <div className='col-md-9'>
                                            <p>{employeeData.id}</p>
                                        </div>
                                    </div>

                                    <div className='row mt-2'>
                                        <div className='col-md-3'>
                                            <h6>User Name : </h6>
                                        </div>
                                        <div className='col-md-9'>
                                            <p>{employeeData.userName}</p>
                                        </div>
                                    </div>

                                    <div className='row mt-2'>
                                        <div className='col-md-3'>
                                            <h6>Full Name : </h6>
                                        </div>
                                        <div className='col-md-9'>
                                            <p>{employeeData.firstName} {employeeData.lastName}</p>
                                        </div>
                                    </div>

                                    <div className='row mt-2'>
                                        <div className='col-md-3'>
                                            <h6>Email ID : </h6>
                                        </div>
                                        <div className='col-md-9'>
                                            <p>{employeeData.email}</p>
                                        </div>
                                    </div>
                                    </>
                              ))
                        }

                        </div>
                    </div>

                    <div className='col-md-3'>
                        <button className='btn btn-info mt-5'>Edit Profile</button><br />
                        <button className='btn btn-danger mt-2' onClick={(e) => Logout()}>Log Out</button>
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

            </div>
        </div>

    );
};

export default AboutEmp;