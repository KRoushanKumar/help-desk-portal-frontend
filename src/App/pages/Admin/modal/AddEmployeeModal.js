import React, { useState ,useEffect} from 'react';
import axios from "../../../../Assets/axios"
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../Assets/css/admin/modal.css"

const AddEmployeeModal=({closeAddEmpModal}) => {
    const [error,setError]=useState("");
    const [employee,setEmployee]=useState({
        userName:"",
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    });
    const {userName,firstName,lastName,email,password}=employee;

    const onInputChange=(e)=>{
        setEmployee({...employee,[e.target.name]: e.target.value})
    };

    console.log("addEmployee fn called");

    const saveEmployee= async(e)=>{
        try {
            const res=await axios.post(`/addEmployee/${sessionStorage.getItem("UserID")}`,employee)
            console.log(res.data);
           
        } catch (error) {
            setError(error.message)
        }
    }

 
    return(
        <div className="container-fluid">
        
        <div className="row">
        <div className='modal-wrapper'></div>
            <div className="col-md-4 m-auto mt-5 modal-container">
            
                <div class="card ">
                    <article class="card-body">

                        <h4 class="card-title  text-dark text-center rounded">Add Employee</h4>
                        <hr style={{ backgroundColor: "red" }} />
                        <div className="form">
                            <div class="form-group">
                                <input name="userName" onChange={(e)=> onInputChange(e)} value={userName} class="form-control" placeholder="User name" type="text" required />
                            </div>
                            <div class="form-group">
                                <input name="firstName" onChange={(e)=> onInputChange(e)} value={firstName} class="form-control" placeholder="First name" type="text" required />
                            </div>
                            <div class="form-group">
                                <input name="lastName" onChange={(e)=> onInputChange(e)} value={lastName} class="form-control" placeholder="Last name" type="text" required />
                            </div>
                            <div class="form-group">
                                <input  name="email" onChange={(e)=> onInputChange(e)} value={email} class="form-control" placeholder="Email" type="email" required />
                            </div>
                            <div class="form-group">
                                <input  name="password" onChange={(e)=> onInputChange(e)} value={password} class="form-control" placeholder="password" type="password" required />
                            </div>
                            <div className='text-center '>
                                <button type="submit" class="btn btn-success btn-block" onClick={()=>saveEmployee()}> Add  </button>
                                <button type="submit" class="btn btn-success btn-block m-2" onClick={closeAddEmpModal}> Close  </button>
                            </div>
                        </div>

                    </article>

                </div>
            </div>
        </div>

    </div>
    )
}
export default AddEmployeeModal;