import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "../../../../Assets/axios";
import AddSubCategory from "./AddSubCategory";
import EditSubCategory from "./EditSubCategory"

const ViewSubCategories=(props)=>{
    const [subCategories, setSubCategories] = useState([]);
    const [categryid,setCategryid]=useState(0);
    const [isError, setIsError] = useState("");
    const [showSubCatAdd,setShowSubCatAdd]=useState(false);
    const [showSubCatEdit,setShowSubCatEdit]=useState(false);
    
    const setSession=(subCatId)=>{
        sessionStorage.setItem("subCatId",subCatId);
    }
    const removeSession=(subCatId)=>{
        sessionStorage.removeItem("subCatId");
    }
    const showSubCatModal=()=>{
        setShowSubCatAdd(true);
    }
    const cancelShowSubCatModal=()=>{
        setShowSubCatAdd(false);
    }
    const showSubCatEditModal=(e)=>{
        console.log("show sub cat edit modal working");
        setShowSubCatEdit(true);
        console.log(e.target.value);
        setSession(e.target.value);
    }
    const cancelSubCatEditModal=()=>{
        setShowSubCatEdit(false);
    }
    const handleDelete = async(e) => {
      var subCatId=e.target.value;
        if (window.confirm(`Do you want to Delete/${subCatId}`)) {
            try {
                await axios.delete(`/deleteSubCateTic/${subCatId}`)
                console.log("deleted");
            } catch (error) {
                setIsError(error.message);
                console.log(isError);
            }
        }
    }

    useEffect(() => {
        getSubCategoriesApi();
    }, [categryid]);
    const getSubCategoriesApi = async () => {
        try {
            var ticketId = sessionStorage.getItem("CatId");
            const res = await axios.get(`/subTickCatgyByTicCatgyId/${ticketId}`);
            setSubCategories(res.data);
            console.log(res.data);
            console.log("get sub cat working");
        } catch (error) {
            setIsError(error.message);
        }
    }
  
   
   const showCtrgryList = ()=>
   {
        props.showSubCategories(false);
        props.showCtgryList(true);
        props.showAddSubCategories(false);
   }
    return(
        <div className='container-fluid'>
            <h2 className='text-center text-primary'>SubCategories List</h2>
            <hr style={{color:"red"}}/>
            <div>
                <button className='btn btn-info mb-4' onClick={showSubCatModal}>+ Add SubCategories</button>
                {showSubCatAdd  && <AddSubCategory cancelShowSubCatModal={cancelShowSubCatModal}/>}

                
                <button to="Admin/categoriesPage" className='btn btn-back mb-4'  onClick={()=>(showCtrgryList())} >Back</button>
            </div>
           <div className="btn btn-dark"> Category Name: {props.ticCtgryName}</div>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Subcategories Id</th>
                            <th>Subcategories Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        subCategories.map((subCategory) =>
                            (<tr>

                                <td>{subCategory.id}</td>
                                <td>{subCategory.name}</td>

                                <td>
                                    <button style={{ marginRight: "10px" }} value={subCategory.id} className='btn btn-info'  onClick={(e)=>showSubCatEditModal(e)}>Edit</button>
                                    {
                                        showSubCatEdit && <EditSubCategory cancelSubCatEditModal={cancelSubCatEditModal}/>
                                    }
                                    <button className='btn btn-danger' value={subCategory.id} onClick={(e)=>handleDelete(e)} >Delete</button>
                                </td>
                            </tr>
                            ))
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default ViewSubCategories;