import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://cdn.worldvectorlogo.com/logos/amazon-dark.svg"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login__siginButton">
            Sign in
          </button>
        </form>
        <p>
          Mit Ihrer Anmeldung erklären Sie sich mit unseren Allgemeinen
          Geschäftsbedingungen einverstanden. Bitte lesen Sie unsere
          Datenschutzerklärung, unsere Hinweise zu Cookies und unsere Hinweise
          zu interessenbasierter Werbung.
        </p>

        <button onClick={register} className="login__registerButton">
          Create Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
