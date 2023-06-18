
import { Link } from 'react-router-dom'
import React, { useState ,useEffect} from 'react';
import userPic from "../../../assets/images/userimage.jpg"
import axios from "../../../assets/axios"
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';


const AddEmployee=()=>{
    const [error,setError]=useState("");
    console.log("addEmployee fn called");
    const saveEmployee=(e)=>{
        console.log("badhai ho code run ho gaya");
        const res = axios.post(`/addEmployee/${sessionStorage.getItem("UserId")}`)
        .then(()=>{
            console.log("run ho gaya");
            window.alert("added successfull");
        }).catch((error)=>{
            console.log("error aya");
            setError(error.message);
        });
    }

    const cancelPage =()=>{
        sessionStorage.setItem("Hidden","false");
        console.log("navigating to employee page");
    }

    return(
        <div className="container-fluid">
        <h6 className='btn btn-danger p-2 text-center m-auto '>{error}</h6>
        <div className="row">
            <div className="col-md-4 m-auto mt-5">
            
                <div class="card ">
                    <article class="card-body">

                        <h4 class="card-title  text-dark text-center rounded">Add  Employee</h4>
                        <hr style={{ backgroundColor: "red" }} />
                        <div className="form">
                            <div class="form-group">
                                <input name="" class="form-control" placeholder="User name" type="text" required />
                            </div>
                            <div class="form-group">
                                <input name="" class="form-control" placeholder="First name" type="text" required />
                            </div>

                            <div class="form-group">
                                <input name="" class="form-control" placeholder="Last name" type="text" required />
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="Email" type="email" required />
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="password" type="password" required />
                            </div>

                            <div className='text-center '>
                                <button type="submit" class="btn btn-success btn-block" onClick={()=>saveEmployee()}> Add  </button>

                                <Link to="/Admin/employees">

                                    <button type="submit" class="btn btn-success btn-block m-2" onClick={()=>cancelPage()}> Close  </button>

                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
    )
}
export default AddEmployee;
