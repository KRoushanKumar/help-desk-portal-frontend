import React, { useState, useEffect } from 'react';
import axios from '../../../Assets/axios';
const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [categoriesid, setCategoriesid] = useState(0);
    const [st, setSt] = useState([]);
    const [isError, setIsError] = useState("");



    
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


    const handleCategories = (event) => {
        const getcoutryid = event.target.value;
        console.log(getcoutryid);
        setCategoriesid(getcoutryid);
        event.preventDefault();
        //console.log(getcoutryid);
    }


    
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

    return (

        <div className='container m-auto'>

            

            <div className='row'>
                <div className='col-sm-12'>

                    <div className='row mb-3 m-auto'>
                        <h4 className='mt-3'>Search Tickets</h4>
                        <div className='form-group col-md-4 mt-1'>

                            <select name='categories' className='form-control'  onChange={(e) => handleCategories(e)}>
                                <option>--Select Categories--</option>
                                {
                                    categories.map((categoryget) => (
                                        <option key={categoryget.id} value={categoryget.id} >{categoryget.name}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className='form-group col-md-4 mt-1'>

                            <select  name='state' className='form-control'>
                                <option>--Select SubCategories--</option>
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