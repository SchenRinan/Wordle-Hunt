import Aboutmodal from "./Aboutmodal";
import Codesoffcanvas from "./Codesoffcanvas";
import Creditsmodal from "./Creditsmodal";
import Duckdropdown from "./Duckdropdown";

const Nav = () => {
    return (
<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Duckdropdown/>
        <Aboutmodal/>
        <Creditsmodal/>
    </nav>
    {/* Offcanvas for codes used */}
    <Codesoffcanvas/>
    {/* End of Offcanvas */}
</>
    );
}
 
export default Nav;