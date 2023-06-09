import React, { useEffect, useState } from 'react';
import axios from "../../../assets/axios"
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, Outlet } from 'react-router-dom';

const Employees = () => {
    const [isError, setIsError] = useState("");
    const [employees, setEmployees] = useState([]);
    const getAllEmployee = async () => {
        try {
            const res = await axios.get(`/getAllEmployees/${sessionStorage.getItem('UserID')}`);
            setEmployees(res.data);
            console.log('working');
        } catch (error) {
            setIsError(error.message);
            console.log('error aa gaya bhago');
        }
    }

    useEffect(() => {
        getAllEmployee();
    }, []);

    const handleDelete=(e)=>{
        var empId = document.getElementById("deleteEmployee").value
        if (window.confirm('Do you want to Delete')) {
            // try {
            //     axios.delete("/", {  })
            //     console.log("deleted");
            // } catch (error) {
            //     setIsError(error.message);
            // }
        }
    }

    return (
        <div className='container p-5' >
            <h2 className='text-center p-3 text-white bg-info '>Employees List</h2>

            <Outlet />

            <Link to="/Admin/employees/addEmployee">
                <div style={{ marginBottom: "10px" }}>
                    <button className='btn btn-dark'  >Add Employee</button>
                </div>
            </Link>

            
            <div className='row text-white'>
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
                        {
                            employees?.map((employee) => (

                                <tr>

                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.userName}</td>
                                    <td>
                                        <Link to="/Admin/employees/updateEmployee">
                                            <button style={{ marginRight: "10px" }} className='btn btn-info'>Update</button>
                                        </Link>
                                        <button className='btn btn-danger' value={employee.id} id='deleteEmpployee'  onClick={(e)=>handleDelete()}>Delete</button>
                                    </td>


                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Employees;