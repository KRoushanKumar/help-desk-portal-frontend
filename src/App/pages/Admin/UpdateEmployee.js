import React from 'react'
import { Link } from 'react-router-dom'

const UpdateEmployee=()=> {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 m-auto mt-5">
                        <div class="card ">
                            <article class="card-body">

                                <h4 class="card-title  text-dark text-center rounded">Update Employee</h4>
                                <hr style={{ backgroundColor: "red" }} />
                                <div className="form">
                                    <div class="form-group">
                                        <input name="" class="form-control" placeholder="User name" type="text" required />
                                    </div>
                                    <div class="form-group">
                                        <input name="" class="form-control" placeholder="First name" type="text" required />
                                    </div>

                                    <div class="form-group">
                                        <input name="" class="form-control" placeholder="Last name" type="text" required />
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" placeholder="Email" type="email" required />
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" placeholder="password" type="password" required />
                                    </div>

                                    <div class="text-center">                            
                                    
                                       <button type="submit" class="btn btn-success btn-block m-2"> Add  </button>
                                         
                                    <Link to="/Admin/employees">
                                        
                                        <button type="submit" class="btn btn-success btn-block"> Close  </button>
                                        
                                    </Link>
                                    </div>

                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateEmployee;
