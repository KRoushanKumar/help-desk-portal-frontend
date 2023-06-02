import axios from "../../../assets/axios";


const AddSubCategory=()=>{
    const input=(e)=>{
   
        var subcategoryName=document.getElementById('SubcategoryName').value;
        axios.post('addTicketCategories',{categoryName:e.categoryName})
            .then(()=>{
                alert('Add successful ${categoryame}')
                console.log(subcategoryName)
            }).catch((error) => { console.log(error) });
    }


    return(
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-4 m-auto mt-5"> 
                <div class="card text-dark">
                    <article class="card-body p-4">

                        <h4 class="card-title  p-2  text-primary text-left rounded">Add  Subcategories </h4>
                        <hr style={{color:"green"}}/>
                        <div className="form" id="addCategory">

                         <div class="form-group mb-2">
                                <input name="" class="form-control"  disabled="disabled" placeholder=" category name"  id="SubcategoryName" type="text" required/>
                            </div>

                            <div class="form-group mb-2">
                                <input name="" class="form-control" placeholder=" Enter SubCategory title to add"  id="SubcategoryName" type="text" required/>
                            </div>

                            <div class="form-group text-left">
                                <button type="submit"  class="btn btn-success btn-block" onClick={()=>(input())}> Add  </button>
                                <button type="submit" class="m-2 btn btn-danger btn-block"> Back  </button>
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