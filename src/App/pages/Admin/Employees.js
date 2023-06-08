import React, { useEffect, useState } from 'react';
import axios from "../../../assets/axios"
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, Outlet } from 'react-router-dom';

const Employees = () => {
    const [isError, setIsError] = useState("");
    const [employees,setEmployees] =[];
  const getAllEmployee=async()=>{
    try{
        const res = await axios.get(`/getAllEmployees/${sessionStorage.getItem('UserID')}`);
        setEmployees(res.data);
        console.log('working');
    }catch(error){
        setIsError(error.message);
        console.log('error aa gaya bhago');
    }
  }

   useEffect(()=>{
    getAllEmployee();
   },[]);
    
    return (
        <div className='container'>
            <h2 className='text-center'>Employees List</h2>

            <Link to="/Admin/employees/addEmployee">
                <div style={{ marginBottom: "10px" }}>
                    <button className='btn btn-primary'  >Add Employee</button>
                </div>
            </Link>

            <Outlet />
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email ID</th>
                            <th>User Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                           {
                            employees?.map((employee)=>(
                                <>
                             <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.userName}</td>
                            <td>
                                <button style={{ marginRight: "10px" }} className='btn btn-info'>Update</button>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                            </>
                            ))
                           }
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Employees;