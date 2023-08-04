const Signupoffcanvas = () => {
    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="signupoffcanvas" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Sign Up</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="row">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputFirstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="inputFirstName"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputLastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="inputLastName"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword"/>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Signupoffcanvas;