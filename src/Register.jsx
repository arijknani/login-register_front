import React, { useState } from "react";
export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(name);
  };
  return (
    <div className="auth-form-container">
        <h2>Register</h2>
      <form  className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          name="name"
          placeholder="full name"
        ></input>
        <label htmlFor="email">Email : </label>
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
        <button type="submit">Sign In</button>
        <br></br>
      </form>
      <button  className="lnk-btn" onClick={() => props.onFormSwitch("login")}>
        already have an account?Log In here.
      </button>
    </div>
  );
};
