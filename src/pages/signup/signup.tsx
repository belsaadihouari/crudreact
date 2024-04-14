import Formsignup from "../../component/formsignup/formsignup";
import "./signup.css"
import Layout from "../../component/layout/layout";
const Signup = () => {
    return (
        <Layout>
        <div className="containersignup">
        <Formsignup />
        </div>
        </Layout>
    );
}

export default Signup;
