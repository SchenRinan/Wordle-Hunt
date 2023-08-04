const Creditsmodal = () => {
    return (
        <div className="modal fade" id="credits" tabIndex="-1" aria-labelledby="creditsLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5">Credits</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <h2>Created by:</h2>
                    <div className="d-flex justify-content-evenly">
                        <div>
                            <a href="http://www.linkedin.com/in/janschnell" target="_blank" rel="noreferrer"><img src="https://media.licdn.com/dms/image/C4E03AQHuJdeT_k2XIA/profile-displayphoto-shrink_400_400/0/1623155275031?e=1696464000&v=beta&t=ogNkDktoGQPejdTiknF9f1x9tH2DHwMGaT6nu1LObiI" alt="" className="img-thumbnail img-fluid rounded-circle" style={{height: '200px', width: '200px'}}/></a>
                            <h3 className="text-center">Jan</h3>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    );
}
 
export default Creditsmodal;