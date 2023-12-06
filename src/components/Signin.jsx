import React, { useContext } from "react";
import { Link } from "react-router-dom";



const Signin = ({email, setEmail, password, setPassword, handleSignIn }) => {
  return (
    <form
      onSubmit={handleSignIn}
      className="signIn container d-flex flex-column gap-3 p-2"
    >
      <h2 className="display-6 text-light text-center">
        Sign In 
      </h2>
      <div className="form-group d-flex flex-column gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          autoComplete="off"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <small className="form-text text-muted"></small>
      </div>
      <div className="form-group d-flex flex-column gap-1">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <small className="form-text text-muted"></small>
      </div>
      <div className="form-group d-flex justify-content-between gap-1 px-1">
        <Link
          className="link-light btn btn-outline-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          to="forgot"
        >
          Forgot Password
        </Link>
        <Link
          className="link-light btn btn-outline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          to="signup"
        >
          Sign Up
        </Link>
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
      
    </form>
  );
};

export default Signin