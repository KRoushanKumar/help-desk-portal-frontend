import React, { useState } from 'react';

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, Outlet } from 'react-router-dom';

const Employees = () => {


    // function AddEmployee(adminId) {
    //     Axios.post(`http://localhost:8080/api/AddEmployee/${adminId}`,{data:data}).then((res) => {
    //         if (res.data)
    //             alert("")
    //     });
    // }
    
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
                            <td>Alok</td>
                            <td>Kumar</td>
                            <td>alok@gmail.com</td>
                            <td>alok21</td>
                            <td>
                                <button style={{ marginRight: "10px" }} className='btn btn-info'>Update</button>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Employees;