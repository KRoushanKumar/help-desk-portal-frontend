import React, { useState, useEffect } from 'react';
import "../../../assets/css/raisecomplaint.css"
import axios from "../../../assets/axios"
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

    const handleHidden = (e) => {
        if (e.target.value === "wfh") {
            document.getElementById("hidden1").style.display = "block";
            document.getElementById("hidden2").style.display = "block";
        }
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

                    <select name='state' className='form-control' onChange={(e) => handleHidden(e)} >
                        <option>--Select SubCategories--</option>
                        <option value={"tg"}>2</option>
                        <option value={"wfh"}>wfh</option>

                    </select>
                </div>
                <div class="form-field col-lg-6">
                    <input id="title" class="input-text js-input" type="text" required placeholder='Title' />

                </div>
                <div class="form-field col-lg-6 ">
                    <input id="email" class="input-text js-input" type="date" value="" required onfocus="(this.type='date')" placeholder='Due-date' />
                    <span class="text-primary" style={{ fontWeight: 100 }}>Due-Date </span>
                </div>

                <div class="form-field col-lg-6 " id='hidden1'>
                    <input id="start_date" class="input-text js-input" type="date" required placeholder='Title' />
                    <span class="text-primary" style={{ fontWeight: 100 }}>Start-Date </span>
                </div>
                <div class="form-field col-lg-6  " id='hidden2'>
                    <input id="end_date" class="input-text js-input" type="date" value="" required onfocus="(this.type='date')" placeholder='Due-date' />
                    <span class="text-primary" style={{ fontWeight: 100 }}>End-Date </span>
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