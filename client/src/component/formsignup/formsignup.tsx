import "./formsignup.css";
import { useState } from "react";
interface Data {
  username:string,
  email:string,
  password:string,
  cpassword:string
}
const Formsignup = () => {
  const [state, setstate] = useState<boolean>(false);
  const [state2,setState2]=useState<Data>({username:"",email:"",password:"",cpassword:""})

const handlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
setState2({...state2,[e.target.name]:e.target.value})
}

  return (
    <form className="login-form2">
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
