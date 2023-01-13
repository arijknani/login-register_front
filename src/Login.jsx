import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };
  return (
    <div className="auth-form-container">
        <h2>LogIn</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email :</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="your email"
          id="email"
          name="email"
        ></input>

        <label htmlFor="password">Password :</label>
        <input
          value={password}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="your password"
          id="password"
          name="password"
        ></input>
        <br></br>
        <button type="submit">LogIn</button>
        <br></br>
      </form>
      
      <button  className="lnk-btn" onClick={() => props.onFormSwitch("regiter")}>
        don't have an account? register here.
      </button>
    </div>
  );
};
