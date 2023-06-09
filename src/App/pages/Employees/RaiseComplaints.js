import React, { useState, useEffect } from 'react';
import "../../../Assets/css/raisecomplaint.css"
import axios from "../../../Assets/axios"
const RaiseComplaints = () => {

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
        <div class="get-in-touch p-5">
            <h1 class="title">Raise Query</h1>
            <form class="contact-form row">
                
                <div className='form-field col-lg-6'>
                
                    <select name='categories' className='form-control' onChange={(e) => handleCategories(e)}>
                        <option>--Select Categories--</option>
                        {
                            categories.map((categoryget) => (
                                <option key={categoryget.id} value={categoryget.id} >{categoryget.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='form-field col-lg-6'>
                
                    <select name='state' className='form-control'>
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
                <div class="form-field col-lg-6">
                    <input id="title" class="input-text js-input" type="text" required placeholder='Title' />
                    
                </div>
                <div class="form-field col-lg-6 ">
                    <input id="email" class="input-text js-input" type="date" value="" required onfocus="(this.type='date')" placeholder='Due-date'/>
                   <span class="text-primary" style={{fontWeight:100}}>Due-Date </span>
                </div>
                <div class="form-field col-lg-12">
                
                    <textarea id="desc" class="input-text js-input " type="text" required placeholder='Description'></textarea>
                    
                </div>
                <div class="form-field col-lg-12">
                    <input class="submit-btn" type="submit" value="Submit" />
                </div>
            </form>
        </div>

    );
};

export default RaiseComplaints;