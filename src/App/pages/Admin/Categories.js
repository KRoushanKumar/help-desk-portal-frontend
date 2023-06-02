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
            const res = await axios.get("/allTicketCategories");
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
                    <button className='btn btn-success mt-2' data-bs-toggle="modal" data-bs-target="#addCategoriesModal">+Add Categories</button>
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
                                        <option key={categoryget.id} value={categoryget.id} >{categoryget.name}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className='form-group col-md-4 mt-1'>

                            <select name='state' className='form-control'>
                                <option>--Select subcategories--</option>
                                {
                                    categories.map((categoryget) => (
                                        <option key={categoryget.ticketSubCategeries.id} value={categoryget.ticketSubCategeries.id} >{categoryget.ticketSubCategeries.name}</option>
                                    ))
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


            {/* Modal of Add categories */}
            <div class="modal fade" id="addCategoriesModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add Categories</h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className='form' id="addCateForm">
                                <div class="form-group">
                                    <input name="" class="form-control" placeholder="Enter Category  " type="text" required />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" form="addCateForm" class="btn btn-primary" >Add </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal of Add Subcategories */}
            <div class="modal fade" id="addSubCategoriesModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add SubCategories</h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className='form' id="addCateForm">
                                <div class="form-group">
                                    <select name='categories' className='form-control' onChange={(e) => handleCategories(e)}>
                                        <option>--Select Categories--</option>
                                        {
                                            categories.map((categoryget) => (
                                                <option key={categoryget.cateId} value={categoryget.cateId} >{categoryget.cateName}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input name="" class="form-control" placeholder="Enter SubCategory  " type="text" required />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" form="addCateForm" class="btn btn-primary" >Add </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal of edit categories */}
            <div class="modal fade" id="editCategoriesModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Edit Categories</h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className='form' id="addCateForm">
                                <div class="form-group">
                                    <select name='categories' className='form-control' onChange={(e) => handleCategories(e)}>
                                        <option>--Select Categories--</option>
                                        {
                                            categories.map((categoryget) => (
                                                <option key={categoryget.cateId} value={categoryget.cateId} >{categoryget.cateName}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input name="" class="form-control" placeholder="Rename Category  " type="text" required />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" form="addCateForm" class="btn btn-primary" >Edit </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal of edit SubCategoriesModal */}
            <div class="modal fade" id="editSubCategoriesModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Edit SubCategories</h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className='form' id="addCateForm">
                                <div class="form-group">
                                    <select name='categories' className='form-control' onChange={(e) => handleCategories(e)}>
                                        <option>--Select Categories--</option>
                                        {
                                            categories.map((categoryget) => (
                                                <option key={categoryget.cateId} value={categoryget.cateId} >{categoryget.cateName}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div class="form-group">
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
                                <div class="form-group">
                                    <input name="" class="form-control" placeholder="Rename SubCategory  " type="text" required />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" form="addCateForm" class="btn btn-primary" >Edit </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Categories;