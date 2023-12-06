import React from "react";
import { Link } from "react-router-dom";



const Forgotpage  = ({ handleForgot, email, setEmail }) => {
    
  return (
    <form
      onSubmit={handleForgot}
      className="signIn container d-flex flex-column gap-3 p-2"
    >
      <h2 className="display-6 text-center">Forgot Password</h2>
      <div className="form-group d-flex flex-column gap-1">
        <label htmlFor="userName">Email</label>
        <input
          type="email"
          className="form-control"
          id="userName"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
          required
        />
        <small className="form-text text-muted"></small>
      </div>
      <button type="submit" className="btn btn-primary">
         Reset
      </button>
      <Link className="text-light text-decoration-none text-center" to={"/"}>
        <button type="button" className="btn btn-primary">
          Go to Login
        </button>
      </Link>
      
    </form>
  );
};


export default Forgotpage