import "../../../../Assets/css/admin/modal.css"
const ShowQuerySolutionModal = ({cancelShowQuerySolutionModal}) => {
    return (
        <>
            <div class="modal-wrapper" ></div>
            <div class=" container modal-container">
                <div class="row m-3">
                    <div class=" text-center">
                        <h5 class="modal-title" >All Solution</h5>
                    </div>
                    <div class=" p-2">
                        ....
                    </div>
                    <div class="mt-2">
                        <button type="button" class="btn btn-secondary" onClick={cancelShowQuerySolutionModal} >Close</button>
                    </div>
                </div>
            </div>
        </>
    )
};
 export default ShowQuerySolutionModal;