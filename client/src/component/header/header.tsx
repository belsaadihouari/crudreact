import "./header.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header className="container">
      {location.pathname !== "/" && (
        <div
          onClick={() => {
            navigate("/");
          }}
          className="btn"
        >
          Home
        </div>
      )}
      {location.pathname == "/signup" && (
        <div
          onClick={() => {
            navigate("/signin");
          }}
          className="btn"
        >
          Signin
        </div>
      )}
      {location.pathname == "/" && (
        <div
          onClick={() => {
            navigate("/signin");
          }}
          className="btn"
        >
          Signin
        </div>
      )}
      {location.pathname !== "/signup" && (
        <div
          onClick={() => {
            navigate("/signup");
          }}
          className="btn"
        >
          Signup
        </div>
      )}
      <div
        onClick={() => {
          navigate("/data");
        }}
        className="btn"
      >
        Users
      </div>
    </header>
  );
};

export default Header;
