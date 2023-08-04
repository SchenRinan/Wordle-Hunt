const Duckdropdown = () => {
    return (
        <div className="container-fluid">
            <div className="dropdown">
                <button className="btn btn-tertiary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="/duck-favicon.png" alt="" style={{height: '30px'}}/>
                </button>
                <ul className="dropdown-menu">
                    <li className="dropdown-item"><button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#about">About Wordle Hunt</button></li>
                    <li className="dropdown-item"><button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#credits">Credits</button></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li className="dropdown-item"><button className="dropdown-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCodePreview" aria-controls="offcanvasExample">Codes Used</button></li>
                </ul>
            </div>
            <img src="/Wordle_Hunt.png" alt="" style={{width: '150px'}}/>
            <div className='d-flex justify-content-between' style={{width: '160px'}}>
                <button type="button" className="btn btn-outline-primary">Log In</button>
                <button type="button" className="btn btn-primary">Sign Up</button>
            </div>
        </div>
    );
}
 
export default Duckdropdown;