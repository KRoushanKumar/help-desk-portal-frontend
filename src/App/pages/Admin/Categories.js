import React, { useState, useEffect } from 'react';
import axios from '../../../assets/axios'
const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [categoriesid, setCategoriesid] = useState('');
    const [st, setSt] = useState([]);
    const [isError, setIsError] = useState("");

    { /* useEffect(()=>{
        const getCategories = async () => {
            const res = await fetch("http://localhost:8080/api/categories");
            const getCategory = await res.json();

            setCategories(await getCategory);
        }
        getCategories();
    },[]);*/}
    {/* useEffect( ()=>{

        const getstate= async ()=>{
          const resstate= await fetch(`http://localhost:8080/api/subcategories/${categoriesid}`);
          const getst= resstate.json();
          setSt(await getst);
    
        }
        getstate();
    
      },[categoriesid]);*/}

    const getCategoriesApi = async () => {
        try {
            const res = await axios.get("/categories");
            setCategories(res.data);
        } catch (error) {
            setIsError(error.message);
        }
    };
    useEffect(() => {
        getCategoriesApi();
    }, [])


    const handleCategories = (event) => {
        const getcoutryid = event.target.value;
        setCategoriesid(getcoutryid);
        event.preventDefault();
    }


    const getSubCategoriesApi = async () => {
        try {
            const res = await axios.get(`/subcategories/${categoriesid}`);
            setSt(res.data);
        } catch (error) {
            setIsError(error.message);
        }
    }
    useEffect(() => {
        getSubCategoriesApi();
    }, [])

    return (

        <div className='container m-auto'>
            <div className='row m-0'>
                <div className='col-md-2 '>
                    <button className='btn btn-success mt-2'>+Add Categories</button>
                </div>
                <div className='col-md-2'>
                    <button className='btn btn-success mt-2'>+Add SubCategories</button>
                </div>
                <div className='col-md-2'>
                    <button className='btn btn-success mt-2'>+Edit Categories</button>
                </div>
                <div className='col-md-2'>
                    <button className='btn btn-success mt-2'>+Edit SubCategories</button>
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className='col-sm-12'>

                    <div className='row mb-3 m-auto'>
                    <h4 className='mt-3'>Search Tickets</h4>
                        <div className='form-group col-md-4 mt-1'>

                            <select name='categories' className='form-control' onChange={(e) => handleCategories(e)}>
                                <option>--Select Categories--</option>
                                {
                                    categories.map((categoryget) => (
                                        <option key={categoryget.cateId} value={categoryget.cateId} >{categoryget.cateName}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className='form-group col-md-4 mt-1'>

                            <select name='state' className='form-control'>
                                <option>--Select subcategories--</option>
                                {
                                    st.map(
                                        (resst) => (
                                            <option key={resst.subCateId} value={resst.subCateId}>{resst.subCateName}</option>
                                        )
                                    )
                                }
                            </select>
                        </div>

                        <div className='form-group col-md-2 '>
                            <button className='btn btn-success mt-2'><i class="bi bi-search"></i></button>
                        </div>




                    </div>
                </div>

            </div>

            <div >
                { /*Main layout */}
                <main style={{ marginTop: "10px" }} className='mr-3'>
                    <div class="container-fluid   ">
                        <div className='row border p-2  bg-primary rounded'>
                            <h5 className='text-white'>All tickets</h5>
                        </div>
                        <div className='row border'>
                            <div class="container-fluid">
                                <table class="table">
                                    <thead className='text-info '>
                                        <tr>
                                            <th>REQUESTER</th>
                                            <th>SUBJECT</th>
                                            <th>ASSIGNEE</th>
                                            <th>STATUS</th>
                                            <th>LAST MESSAGE</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
                {/*Main layout*/}
            </div>
        </div>

    );
};

export default Categories;