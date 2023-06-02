import axios from "../../../../assets/axios";
const EditSubCategory = () => {

    const input = (e) => {

        var subcategoryId = document.getElementById('SubcategoryName').value;
        axios.put('addTicketSubCategories', { subcategoryId })
            .then(() => {
                alert('Add successful ${categoryame}')
                console.log(subcategoryId)
            }).catch((error) => { console.log(error) });
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 m-auto mt-5">
                    <div class="card text-dark">
                        <article class="card-body p-4">

                            <h4 class="card-title  p-2  text-primary text-left rounded">Edit  Subcategories </h4>
                            <hr style={{ color: "green" }} />
                            <div className="form" id="addCategory">

                                <div class="form-group mb-2">
                                    <input name="" value="{categoory.name}" class="form-control" disabled="disabled" id="cateName" type="text" required />
                                </div>
                                <div class="form-group mb-2">
                                    <input name="" value="{subcategoory.id}" class="form-control" disabled="disabled" id="SubcategoryId" type="text" required />
                                </div>

                                <div class="form-group mb-2">
                                    <input name="" class="form-control" value="{subcategory.name}" id="SubcategoryName" type="text" required />
                                </div>

                                <div class="form-group text-left">
                                    <button type="submit" class="btn btn-success btn-block" onClick={() => (input())}> Save  </button>
                                    <button type="submit" class=" m-2 btn btn-danger btn-block"> Back  </button>
                                </div>

                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EditSubCategory;