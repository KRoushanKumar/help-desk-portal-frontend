import axios from "../../../../Assets/axios";
import "../../../../Assets/css/admin/modal.css"

const AddSubCategory=({cancelShowSubCatModal})=>{
    const input=(e)=>{
       
    }

    return(
        <div className="container-fluid">
        <div className="row">
        <div className='modal-wrapper'></div>
            <div className="col-md-4 m-auto mt-5 modal-container"> 
                <div class="card text-dark">
                    <article class="card-body p-4">

                        <h4 class="card-title  p-2  text-primary text-left rounded">Add  Subcategories </h4>
                        <hr style={{color:"green"}}/>
                        <div className="form" id="addCategory">

                         <div class="form-group mb-2">
                                <input name="" class="form-control"  disabled="disabled" placeholder=" category name" 
                                       value={""} id="categoryName" type="text" required/>
                            </div>

                            <div class="form-group mb-2">
                                <input name="" class="form-control" placeholder=" Enter SubCategory title to add"  id="SubcategoryName" type="text" required/>
                            </div>

                            <div class="form-group text-left">
                                <button  class="btn btn-success btn-block" onClick={()=>(input())}> Add  </button>
                                <button  class="m-2 btn btn-danger btn-block" onClick={cancelShowSubCatModal}> Back  </button>
                            </div>

                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
    );
}
export default AddSubCategory;