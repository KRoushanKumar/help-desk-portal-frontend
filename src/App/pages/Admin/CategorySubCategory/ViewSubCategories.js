import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "../../../../Assets/axios";


const ViewSubCategories=(props)=>{
    const [subCategories, setSubCategories] = useState([]);
    const [categryid,setCategryid]=useState(0);
    const [isError, setIsError] = useState("");
    console.log(" + "+ props.ticCtgryId);
    
    const handleDelete = () => {
        var categoriesid = document.getElementById("deleteSubCate").value
        if (window.confirm('Do you want to Delete')) {
            try {
                axios.delete("/deleteCategory", {categoriesid})
                console.log("deleted");
            } catch (error) {
                setIsError(error.message);
                console.log(isError);
            }
        }

    }

    useEffect(() => {
        setCategryid(props.ticCtgryId);
        const getSubCategoriesApi = async () => {
            try {
                const res = await axios.get(`/subTickCatgyByTicCatgyId/${categryid}`);
                setSubCategories(await res.data);
            } catch (error) {
                setIsError(error.message);
            }
        }
       getSubCategoriesApi();
   }, [categryid]);

   const showCtrgryList = ()=>
   {
        props.showSubCategories(false);
        props.showCtgryList(true);
        props.showAddSubCategories(false);
   }
   const showAddSubCategories = ()=>
   {
        props.showAddSubCategories(true);
        
   }

    return(
        <div className='container'>
            <h2 className='text-center text-primary'>SubCategories List</h2>
            <hr style={{color:"red"}}/>
            <div>
                <button className='btn btn-info mb-4 'onClick={()=>showAddSubCategories()}>+ Add SubCategories</button>
                <button className='btn btn-back mb-4' onClick={()=>(showCtrgryList())}  >Back</button>
            </div>
            Category Name: {props.ticCtgryName}
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
                                    <Link to="" style={{ marginRight: "10px" }}  className='btn btn-info'  >Edit</Link>
                                    <button className='btn btn-danger'  >Delete</button>
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