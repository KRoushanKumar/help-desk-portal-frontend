import React, { useState, useEffect } from 'react';
import axios from "../../../../Assets/axios"
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../Assets/css/admin/modal.css"

const UpdateEmployeeModal = ({closeUpdateEmpModal}) => {

    const [userData, setUserData] = useState([]);
    const [isError, setIsError] = useState("");

    const getuserApi = async () => {
        try {
            console.log("getUserApi calling");
            const res = await axios.get(`/getUserByUserId/${sessionStorage.getItem('empId')}`);
            setUserData(res.data);
            console.log("working");
            console.log(res.data);
        } catch (error) {
            setIsError(error.message);
            console.log("error kaha se aa rha");
        }
    };

    useEffect(
        () => {
            console.log("calling getEmployeeApi function");
            getuserApi();
        }, [])
        // const updateEmployee=(e)=>{
        //     const first_name=document.getElementById('first_name').value;
        //     const last_name =document.getElementById('last_name').value;
        //     const email=document.getElementById('email').value;
        //     console.log("badhai ho code run ho gaya");
        //     // const res = axios.post(`/addEmployee/${sessionStorage.getItem("empId")}`,{firstname:first_name,lastName:last_name,email:email})
        //     // .then(()=>{
        //     //     sessionStorage.removeItem("empId");
        //     //     navigate
        //     // }).catch((error)=>{
        //     //     console.log("error aya");
        //     // });
        // }
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                <div className='modal-wrapper'></div>
                    <div className="col-md-4 m-auto mt-5 modal-container">
                        <div class="card ">
                            <div class="card-body">


                                <h4 class="card-title  text-dark text-center rounded">Update Employee</h4>
                                <hr style={{ backgroundColor: "red" }} />
                                {
                                    userData.map((user)=>(
                                    <div className="form">
                                    <div class="form-group">
                                        <input name="" class="form-control" placeholder="user Id "  value={user.id} type="text" disabled required />
                                        <span className='mx-1 text-info'>UserId</span>
                                    </div>
                                    <div class="form-group">
                                        <input name="" class="form-control" placeholder="User name"  value={user.userName} type="text" disabled />
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" placeholder="password" value={user.password} type="password" disabled />
                                    </div>
                                    <div class="form-group">
                                        <input name="" id="first_name" class="form-control" placeholder="First name" value={user.firstName}  type="text" required />
                                    </div>

                                    <div class="form-group">
                                        <input name="" id="last_name" class="form-control" placeholder="Last name" value={user.lastName} type="text" required />
                                    </div>
                                    <div class="form-group">
                                        <input  id="email" class="form-control" placeholder="Email" value={user.email} type="email" required />
                                    </div>
                                    
                                    <div class="text-center">
                                        <button type="submit" class="btn btn-success btn-block m-2" > Change  </button>
                                       <button type="submit" class="btn btn-success btn-block" onClick={closeUpdateEmpModal}> Close  </button>
                                    </div>

                                 </div>
                              ))  }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateEmployeeModal;
