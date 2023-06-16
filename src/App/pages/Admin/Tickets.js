import React, { useEffect, useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from "../../../assets/axios"
const Tickets = () => {
    const [ticket,setTicket]=useState({});
    const [iserror,setError]=useState("");
    const getTicket=async()=>{
        try {
            const res = await axios.get(`/getAllEmployeesQuery/${sessionStorage.getItem('UserID')}`);
            console.log(res);
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getTicket();
    },[]);

    return (
        <div>

            <div class="container  p-5" >

                <h5 className='text-white text-center bg-info p-3'>All tickets</h5>

                <div className='row border'>
                    <div class="container-fluid">
                        <table class="table">
                            <thead className='text-info '>
                                <tr>
                                    <th>ticket Id</th>
                                    <th>categoory</th>
                                    <th>subcategory</th>
                                    <th>title</th>
                                    <th>Assign To</th>
                                    <th>priority</th>
                                    <th>status</th>
                                    <th>creatred date</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Tickets;