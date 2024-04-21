import toast from "react-hot-toast";
import "./formsignup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Data {
  username: string | null;
  email: string | null;
  password: string | null;
  cpassword: string | null;
  isAdmin: boolean;
}
const Formsignup = () => {
  const navigate = useNavigate();
  const [state, setstate] = useState<boolean>(false);
  const [state2, setState2] = useState<Data>({
    username: null,
    email: null,
    password: null,
    cpassword: null,
    isAdmin: false,
  });







  
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState2({ ...state2, [e.target.name]: e.target.value });
  };

  async function handlerSignup(e: React.SyntheticEvent<EventTarget>) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8085/createUser", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: state2.username,
          email: state2.email,
          password: state2.password,
          cpassword: state2.cpassword,
          isAdmin: state2.isAdmin,
        }),
      });
      const data = await res.json();
      if (data.validator) {
        toast.error("Error validation input");
      }
      if (data.message) {
        toast.error("Email Already Exist");
      }
      if (data.cpass) {
        toast.error("Error confiramtion Password");
      }
      if (data.response) {
        navigate("/data")
        toast.success("User added successfuly");
        
      }
    } catch (error) {
      toast.error("internal server error");
    }
  }

  return (
    <form onSubmit={handlerSignup} className="login-form2">
      <p className="heading2">Sign-up</p>
      <div className="input-group">
        <input
          required
          autoComplete="off"
          placeholder="Username"
          name="username"
          id="username"
          type="text"
          onChange={handlechange}
        />
      </div>

      <div className="input-group2">
        <input
          required
          autoComplete="off"
          placeholder="Email"
          name="email"
          id="email"
          type="email"
          onChange={handlechange}
        />
      </div>
      <div className="input-group2">
        <input
          required
          autoComplete="off"
          placeholder="Password"
          name="password"
          id="password"
          type="password"
          onChange={handlechange}
        />
      </div>
      <div className="input-group2">
        <input
          required
          autoComplete="off"
          placeholder="Confirm Password"
          name="cpassword"
          id="cpassword"
          type="password"
          onChange={handlechange}
        />
      </div>
      <button type="submit" disabled={state} className="button2">
        {state ? "Adding..." : "Submit"}
      </button>
    </form>
  );
};

export default Formsignup;
