import React, { useState, useEffect } from 'react';
import axios from '../../../../Assets/axios'
import {  Link } from "react-router-dom";

const CategoriesList = (props) => {
    const [categories, setCategories] = useState([]);
    const [isError, setIsError] = useState("");
    const [categoriesid,setCategoriesid]=useState();

    const Change = ()=>{
        props.showAddCategory(true);
    }

    const getCategoriesApi = async () => {
        try {
            const res = await axios.get(`/allTicketCategories/${sessionStorage.getItem('UserID')}`);
            setCategories(res.data);
        } catch (error) {
            setIsError(error.message);
            console.log("error kaha se aa rha");
        }
    };
    useEffect(() => {
        getCategoriesApi();
    }, [])


    const handleDelete = () => {
        var categoriesid = document.getElementById("deleteCate").value
        if (window.confirm('Do you want to Delete')) {
            try {
                axios.delete("/deleteCategory", { categoriesid })
                console.log("deleted");
            } catch (error) {
                setIsError(error.message);
            }
        }

    }

    const ShowSubCtgry = (categoryget) =>
    {
        props.showSubCategories(true);
        props.showCtgryList(false);
        props.ticCtgryId(categoryget.id);
        props.ticCtgryName(categoryget.name); 
        console.log("Category Id "+categoryget.id );
        console.log("Category name "+categoryget.name );
    }

    const handleEdit = () => {
        props.showEditCategory(true);
        var categoriesId = document.getElementById("editCate").value
        setCategoriesid(categoriesId);
        console.log(categoriesId);
    }

    return (
        <div className='container p-5 ' >
            <h2 className='text-center bg-info p-3 text-white'>Categories List</h2>
            
            
            <div>
                <button className='btn btn-info' onClick={()=>(Change())}>+ Add Categories</button>
            </div>
            
            
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Category Id</th>
                            <th>Category name </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            categories.map((categoryget) =>
                            (<tr>

                                <td>{categoryget.id}</td>
                                <td>{categoryget.name}</td>

                                <td>
                                    <Link to="" style={{ marginRight: "10px" }} className='btn btn-info dropdown' onClick={()=>(ShowSubCtgry(categoryget))} >View Subcategories</Link>
                                    <Link to="" style={{ marginRight: "10px" }} id="editCate" value={categoryget.id} className='btn btn-info' onClick={handleEdit} >Edit</Link>
                                    <button className='btn btn-danger' value={categoryget.id} id="deleteCate" onClick={handleDelete}>Delete</button>
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

export default CategoriesList;