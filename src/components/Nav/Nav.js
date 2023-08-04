import Aboutmodal from "./Aboutmodal";
import Codesoffcanvas from "./Codesoffcanvas";
import Creditsmodal from "./Creditsmodal";
import Loginmodal from "./Loginmodal";
import Basefeatures from "./Basefeatures";
import Signupoffcanvas from "./Signupoffcanvas";

const Nav = () => {
    return (
<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Basefeatures/>
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