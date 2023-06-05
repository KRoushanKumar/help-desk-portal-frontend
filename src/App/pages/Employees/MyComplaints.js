import React, { useState, useEffect } from 'react';

const MyComplaints = () => {
    return (
        <>

            <div className='container-fluid m-4'>
                <h1 class="text-center text-light mt-5 p-2" style={{ fontWeight: 400, background: `linear-gradient(to right, rgba(10, 24, 2, 1), rgba(0, 133, 255, 11))` }}>My Complaints</h1>
                <table class="table table-hover">
                    <thead class="bg-dark text-light" >
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
                        <tr>
                            <td>1</td>
                            <td>random</td>
                            <td>random2</td>
                            <td>dontknow</td>
                            <td>random</td>
                            <td>high</td>
                            <td>new</td>
                            <td>12-01-2023</td>
                            <td><button ></button></td>
                            <td></td>
                            <td></td>
                        </tr>   
                        <tr>
                            <td>2</td>
                            <td>random</td>
                            <td>random2</td>
                            <td>dontknow</td>
                            <td>random</td>
                            <td>high</td>
                            <td>new</td>
                            <td>12-01-2023</td>
                        </tr>   

                    </tbody>
                </table>



            </div>
        </>
    );
};

export default MyComplaints;