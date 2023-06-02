// import { useEffect, useState } from "react";
 import axios from "../../../../assets/axios";

const EditCategory = (props) => {
    // const cateId=useParams("cateId");

    // const [Categories, setCategories] = useState([]);

    // const getCategoriesApi = async () => {
    //     try {
    //         const res = await axios.get("/ticketCategoryById", { cateId });
    //         setCategories(res);
    //     } catch (error) {
    //         console.log("Error");
    //     }
    // };
    // useEffect(() => {
    //     getCategoriesApi();
    // }, [])

    // const handlesubmit = () => {
    //     var name = document.getElementById("name").value;

    // }

    const showCtgryList = ()=>
    {
        props.showEditCategory(false);
    }
    const input=(e)=>{
   
        var categoryName=document.getElementById('categoryName').value;
        axios.post('addTicketCategories',{categoryName:e.categoryName})
            .then(()=>{
                alert('Add successful ${categoryame}')
                console.log(categoryName)
            }).catch((error) => { console.log(error) });
    }



    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 m-auto mt-5">
                    <div class="card text-dark">
                        <article class="card-body p-4">

                            <h4 class="card-title  p-2  text-primary text-left rounded">Edit  Category </h4>
                            <hr style={{ color: "green" }} />
                            <div className="form" id="addCategory">

                                <div class="form-group mb-2">
                                    <input name="" value="{categoory.Id}" class="form-control" disabled="disabled" id="cateId" type="text" required />
                                </div>
                                <div class="form-group mb-2">
                                    <input name="" value="{categoory.name}" class="form-control" placeholder="  Category title to Edit" id="categoryName" type="text" required />
                                </div>

                                <div class="form-group text-left">
                                    <button type="submit" class="btn btn-success btn-block" onClick={() => (input())}> Save  </button>
                                    <button type="submit" class=" m-2 btn btn-danger btn-block" onClick={()=>{showCtgryList()}}> Back  </button>
                                </div>

                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default EditCategory;