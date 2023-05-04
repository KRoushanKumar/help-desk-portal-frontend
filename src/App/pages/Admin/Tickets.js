import React, { useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Tickets = () => {
    return (
        <div>
                { /*Main layout */}
                <main style={{ marginTop: "58px" }} className=''>
                    <div class="container-fluid pt-4 m-4">
                        <div className='row border p-2'>
                            <h5 className='text-primary'>All tickets</h5>
                        </div>
                        <div className='row border'>
                            <div class="container-fluid">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>REQUESTER</th>
                                            <th>SUBJECT</th>
                                            <th>ASSIGNEE</th>
                                            <th>STATUS</th>
                                            <th>LAST MESSAGE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Alok</td>
                                            <td>Spam</td>
                                            <td>Unassigned</td>
                                            <td><span class="badge rounded-pill bg-primary">Open</span></td>
                                            <td>32 jan 2023</td>
                                        </tr>
                                        <tr>
                                            <td>Ashutosh</td>
                                            <td>Login Issue</td>
                                            <td>Alok</td>
                                            <td><span class="badge rounded-pill bg-info">On hold</span></td>
                                            <td>30 feb 2023</td>
                                        </tr>
                                        <tr>
                                            <td>Alok</td>
                                            <td>Spam</td>
                                            <td>Unassigned</td>
                                            <td><span class="badge rounded-pill bg-primary">Open</span></td>
                                            <td>32 jan 2023</td>
                                        </tr>
                                        <tr>
                                            <td>Alok</td>
                                            <td>Spam</td>
                                            <td>Unassigned</td>
                                            <td><span class="badge rounded-pill bg-primary">Open</span></td>
                                            <td>32 jan 2023</td>
                                        </tr>
                                        <tr>
                                            <td>Alok</td>
                                            <td>Spam</td>
                                            <td>Unassigned</td>
                                            <td><span class="badge rounded-pill bg-primary">Open</span></td>
                                            <td>32 jan 2023</td>
                                        </tr>
                                        <tr>
                                            <td>Alok</td>
                                            <td>Spam</td>
                                            <td>Unassigned</td>
                                            <td><span class="badge rounded-pill bg-primary">Open</span></td>
                                            <td>32 jan 2023</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
                {/*Main layout*/}
            </div>
    );
};

export default Tickets;