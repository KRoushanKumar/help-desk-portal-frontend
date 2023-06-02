import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "../../../assets/axios";


const ViewSubCategories=()=>{
    const [isError, setIsError] = useState("");
    
    const handleDelete = () => {
        var categoriesid = document.getElementById("deleteSubCate").value
        if (window.confirm('Do you want to Delete')) {
            try {
                axios.delete("/deleteCategory", {categoriesid})
                console.log("deleted");
            } catch (error) {
                setIsError(error.message);
            }
        }

    }
    return(
        <div className='container'>
            <h2 className='text-center text-primary'>SubCategories List</h2>
            <hr style={{color:"red"}}/>
            <div>
                <button className='btn btn-info mb-4'>+ Add SubCategories</button>
            </div>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Categories Name</th>
                            <th>Subcategories Id</th>
                            <th>Subcategories Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                       <tr>
                            <td>HardWare</td>
                            <td>1</td>
                            <td>having Ram problem</td>
                            <td>
                                    <button to="" style={{ marginRight: "10px" }} id="editCate"  className='btn btn-info' >Edit</button>
                                    <button className='btn btn-danger'  id="deleteSubCate" onClick={handleDelete} >Delete</button>
                            </td>
                       </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default ViewSubCategories;