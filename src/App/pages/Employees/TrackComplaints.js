import React, { useState,useEffect } from 'react';
import axios from "../../../assets/axios";
const TrackComplaints = () => {
    const [queryTicket,setTicket]=useState([]);
    const [iserror,setError]=useState("");
    const getTicket=async()=>{
        try {
            const res = await axios.get(`/getAllEmployeesQuery/${sessionStorage.getItem('UserID')}`);
            console.log(res.data);
            setTicket(res.data);

        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(()=>{
        getTicket();
    },[]);

    return (
        <div className='container-fluid m-4'>
        <h1 class="text-center text-light mt-5 p-2" style={{ fontWeight: 400, background: `linear-gradient(to right, rgba(10, 24, 2, 1), rgba(0, 133, 255, 11))` }}>My Complaints</h1>
        <table class="table table-hover">
            <thead class="bg-dark text-light" >
                <tr className='text-center'>
                    <th>ticket Id</th>
                    
                    <th>categoory</th>
                    <th>subcategory</th>
                    <th>priority</th>
                    <th>status</th>
                    <th>start date</th>
                    <th>end date</th>
                    <th>query</th>
                    <th>solution</th>
                </tr>
            </thead>
            <tbody>
            {
                queryTicket.map((ticket)=>(
                    <>
                <tr>
                    <td>{ticket.id}</td>
                    <td>{ticket.ticketCategories.name}</td>
                    <td>{ticket.ticketSubCategories.name}</td>
                    <td>{ticket.priority}</td>
                    <td>{ticket.progress}</td>
                    <td>{ticket.startDate}</td>
                    <td>{ticket.endDate}</td>
                    <td><p>{ticket.description}</p></td>
                    <td><p className='btn btn-primary'>see</p></td>
                </tr>   
                </>
                ))
            }
            <tr></tr>
            </tbody>
        </table>



    </div>
    );
};

export default TrackComplaints;