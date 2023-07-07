import React, { useEffect, useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from "../../../Assets/axios"
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

                
            </div>


        </div>
    );
};

export default Tickets;