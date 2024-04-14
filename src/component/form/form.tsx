import "./form.css";
import { useState } from "react";
interface data {
  email: string;
  password: string;
}

const Form = () => {
  const [state, setstate] = useState<boolean>(false);
  const [data, setData] = useState<data>({ email: "", password: "" });

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form className="login-form">
      <p className="heading">Sign-in</p>

      <div className="input-group">
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
      <div className="input-group">
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
      <button type="submit" disabled={state} className="button">
        {state ? "Adding..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
