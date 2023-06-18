import React, { useState, useEffect } from 'react';
import axios from '../../../assets/axios'
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