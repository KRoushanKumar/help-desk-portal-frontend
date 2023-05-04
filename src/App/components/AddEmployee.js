const addEmployee = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 m-auto mt-5"> 
                    <div class="card ">
                        <article class="card-body">

                            <h4 class="card-title mb-4 mt-1 bg-primary p-2 text-white text-center rounded">Add  Employee</h4>
                            <div >
                                <div class="form-group">
                                    <input name="" class="form-control" placeholder="User name" type="text" required/>
                                </div>
                                <div class="form-group">
                                    <input name="" class="form-control" placeholder="First name" type="text" required />
                                </div>
                                <div class="form-group">
                                    <input name="" class="form-control" placeholder="Last name" type="text" required/>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Email" type="email" required/>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="password" type="password" required/>
                                </div>

                                <div class="form-group text-center">
                                    <button type="submit" class="btn btn-primary btn-block"> Add  </button>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default addEmployee;