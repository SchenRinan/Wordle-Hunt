const Codesoffcanvas = () => {
    return (
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasCodePreview" aria-labelledby="offcanvasCodePreviewLabel">
            <div className="offcanvas-header">
                <h4 className="offcanvas-title" id="offcanvasCodePreviewLabel">Codes!</h4>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div>
                <h5>HTML</h5>
                <br/>
                <h5>Style</h5>
                <p>Bootstrap</p>
                <br/>
                <h5>Javascript</h5>
                <p>React
                    <br/>
                    DOM
                </p>
                </div>
                <div className="dropdown mt-3">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    Like to Support us?
                </button>
                <ul className="dropdown-menu">
                    <li><button className="dropdown-item">Oops. Dev did not set this up</button></li>
                    <li><button className="dropdown-item">But when I do, it'll be here</button></li>
                    <li><button className="dropdown-item">It probably won't be</button></li>
                </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Codesoffcanvas;