const Loginmodal = () => {
    return (
        <div className="modal fade" id="loginmodal" tabIndex="-1" aria-labelledby="loginmodalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="loginmodalLabel">Log In</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="InputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">Do people read this?</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="InputPassword1"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
    );
}
 
export default Loginmodal;