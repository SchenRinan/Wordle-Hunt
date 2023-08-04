import Aboutmodal from "./Aboutmodal";
import Codesoffcanvas from "./Codesoffcanvas";
import Creditsmodal from "./Creditsmodal";
import Loginmodal from "./Loginmodal";
import Navmain from "./Navmain";
import Signupoffcanvas from "./Signupoffcanvas";

const Nav = () => {
    return (
<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Navmain/>
        <Aboutmodal/>
        <Creditsmodal/>
        <Loginmodal/>
    </nav>
    <Codesoffcanvas/>
    <Signupoffcanvas/>

</>
    );
}
 
export default Nav;