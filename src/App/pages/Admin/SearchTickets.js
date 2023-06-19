import React, { useState, useEffect } from 'react';
import axios from '../../../assets/axios'
import { Link } from 'react-router-dom';
import "../../../assets/css/admin/searchTickets.css"
const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [categoriesid, setCategoriesid] = useState(0);
    const [subCategoriesid, setSubCategoriesid] = useState(0);
    const [st, setSt] = useState([]);
    const [isError, setIsError] = useState("");
    const [allEmpQuery, setAllEmpQuery] = useState([]);





    useEffect(() => {
        const getCategoriesApi = async () => {
            try {
                const res = await axios.get(`/allTicketCategories/${sessionStorage.getItem('UserID')}`);
                setCategories(await res.data);
            } catch (error) {
                setIsError(error.message);
            }
        };
        getCategoriesApi();
    }, []);


    const updateQueryTable = async () => {
        try {
            const res = await axios.get(`/employeeQueryByCategoryAndSubCategory/${categoriesid}/${subCategoriesid}`);
            setAllEmpQuery(res.data);
            console.log("employeeQueryByCategoryAndSubCategory")

        } catch (error) {
            setIsError(error.message);
        }
    }

    const handleCategories = (event) => {
        const getcoutryid = event.target.value;
        console.log(getcoutryid);
        setCategoriesid(getcoutryid);
        event.preventDefault();
        //console.log(getcoutryid);
    }
    const handleSubCategories = async (event) => {
        const subCoutryid = event.target.value;
        console.log(subCoutryid);
        setSubCategoriesid(await subCoutryid);
        console.log("subCategoriesid " + subCategoriesid);



    }

    useEffect(() => {

        updateQueryTable();
    }, [subCategoriesid]);



    useEffect(() => {
        const getSubCategoriesApi = async () => {
            try {
                const res = await axios.get(`/subTickCatgyByTicCatgyId/${categoriesid}`);
                setSt(await res.data);
            } catch (error) {
                setIsError(error.message);
            }
        }
        getSubCategoriesApi();
    }, [categoriesid]);

    const getAllEmployeeQuery = async () => {
        try {
            const res = await axios.get('/AllEmployeeQuery');
            setAllEmpQuery(await res.data);
            console.log("getAllEmployeeQuery")
            // console.log(res.data);
        } catch (error) {
            setIsError(error.message);
        }
    };
    useEffect(() => {

        getAllEmployeeQuery();
    }, []);
    const allEmployeeQuery = () => {
        getAllEmployeeQuery();
        document.getElementById("categories").value = 0;
        document.getElementById("subCategories").value = 0;
        setCategoriesid(0);
    }





    return (

        <div className='container  p-5' >
            <div className='row'>
                <div className='col-sm-12'>

                    <div className='row m-auto'>
                        <h4 className='bg-info p-3 text-white text-center mb-5'>Search Tickets</h4>
                        <div className='form-group col-md-1 '>
                            <button className='btn btn-info mt-1' onClick={() => (allEmployeeQuery())}><i class="bi bi-list"></i></button>
                        </div>
                        <div className='form-group col-md-4 mt-1'>

                            <select name='categories' id='categories' className='form-control' onChange={(e) => handleCategories(e)}>
                                <option value="0">--Select Categories--</option>
                                {
                                    categories.map((categoryget) => (
                                        <option key={categoryget.id} value={categoryget.id} >{categoryget.name}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className='form-group col-md-4 mt-1'>

                            <select name='subCategories' id='subCategories' className='form-control' onChange={(e) => handleSubCategories(e)}>
                                <option value="0" >--Select SubCategories--</option>
                                {
                                    st.map(
                                        (resst) => (
                                            <option key={resst.id} value={resst.id}>{resst.name}</option>
                                        )
                                    )
                                }
                            </select>
                        </div>

                        <div className='form-group col-md-2 '>
                            <button className='btn btn-success mt-1' onClick={() => (updateQueryTable())}><i class="bi bi-search"></i></button>
                        </div>




                    </div>
                </div>

            </div>

            <div >
                { /*Main layout */}
                <main style={{ marginTop: "10px" }} className='mr-3'>
                    <div class="container-fluid   ">

                        <div className='row border'>
                            <div class="container-fluid">
                                <table class="table">
                                    <thead className='text-info '>
                                        <tr>
                                            <th>Ticket Id</th>
                                            <th>Query</th>
                                            <th>Priority</th>
                                            <th>Progress</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Solution</th>

                                        </tr>
                                    </thead>
                                    <tbody style={{ overflow: "scroll" }}>

                                        {
                                            allEmpQuery.map((query) => (


                                                <tr>

                                                    <td>{query.id}</td>
                                                    {/* <td>{query.description}</td> */}
                                                    <td >
                                                        <div style={{ whiteSpace: "nowrap", width: "100px", overflow: "hidden", textOverflow: "ellipsis" }}>
                                                            <button className='btn btn-light'  ><i class="bi bi-view-list " style={{ fontSize: 15 }} data-bs-toggle="modal" data-bs-target={"#modal" + query.id}></i></button>

                                                            {/* <!-- Modal  of query--> */}
                                                            <div class="modal fade" id={"modal" + query.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                <div class="modal-dialog">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <h5 class="modal-title" id="exampleModalLabel">Query Description</h5>
                                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                        <div class="modal-body p-2">
                                                                            <div className='row'>
                                                                                <p className='text-danger m-3'>{query.description}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="modal-footer">
                                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <span> </span>
                                                            {query.description}
                                                        </div>

                                                    </td>


                                                    <td>{query.priority.prioriryName}</td>
                                                    {
                                                        query.progress.progressName === "On Hold" ?
                                                            <td><span class="badge rounded-pill bg-danger">{query.progress.progressName}</span></td> :
                                                            query.progress.progressName === "Open" ?
                                                                <td><span class="badge rounded-pill bg-success">{query.progress.progressName}</span></td> :
                                                                <td><span class="badge rounded-pill bg-secondary">{query.progress.progressName}</span></td>
                                                    }


                                                    <td>{query.startDate}</td>
                                                    <td>{query.endDate}</td>
                                                    <td>
                                                        <Link to="">
                                                            <button style={{ marginRight: "10px" }} className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#showQuerySolution"><i class="bi bi-view-list"></i></button>
                                                        </Link>

                                                        {/* <!-- Modal  of show Query solution--> */}
                                                        <div class="modal fade" id="showQuerySolution" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="exampleModalLabel">All Solution</h5>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                    </div>
                                                                    <div class="modal-body p-2">
                                                                        ....
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <Link to="">
                                                            <button style={{ marginRight: "10px" }} className='btn btn-success' data-bs-toggle="modal" data-bs-target="#submitQuerySoltion"><i class="bi bi-send-plus"></i></button>
                                                        </Link>

                                                        {/* <!-- Modal  of Submit query soltion--> */}
                                                        <div class="modal fade" id="submitQuerySoltion" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="exampleModalLabel">Submit Solution</h5>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                    </div>
                                                                    <div class="modal-body p-2">
                                                                        <div class="card">
                                                                            <div class="card-body m-3">
                                                                           
                                                                            <br/>
                                                                                <textarea placeholder='Write your Query Solution' >

                                                                                </textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                        <button type="button" class="btn btn-primary">Submit</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </td>



                                                </tr>



                                            ))
                                        }
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