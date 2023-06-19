import "../../../../assets/css/admin/modal.css"
const ShowQueryModal = ({cancelShowQueryModal}) => {
    return (<>
        <div class="modal-wrapper" ></div>
        <div class="modal-container container">
            <div class="row m-2">
                <div class="text-center">
                    <h5 class="" >Query Description</h5>
                    
                </div>
                <div class="">
                    <div className='row'>
                        <p className='text-danger m-3'>query.description</p>
                    </div>
                </div>
                <div class="">
                    <button type="button" class="btn btn-secondary" onClick={cancelShowQueryModal}>Close</button>
                </div>
            </div>
        </div>
    </>
    )
};

export default ShowQueryModal;