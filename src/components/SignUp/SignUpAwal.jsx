import React, { Component } from "react";
import "./style.css";
import { Link } from 'react-router-dom';

class SignUpAwal extends Component {
  render() {
    return (
      <form>
        <div class="image_signup">
          <img src="././images/sandangs/sandangsblue.png" alt=""></img>
        </div>
        <h3>Identitas Pribadi</h3>
        <div className="mb-3">
          <label>Login as Customer</label>
          <input
            type="radio"
            className="form-control"
            placeholder="Login as Customer"
          />
        </div>
        <div className="d-grid">
          <Link to="/signupkonveksisatu">
          <button type="submit" className="btn btn-primary">
              Next
            </button>
          </Link>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/">sign in?</a>
        </p>
      </form>
    );
  }
}

export default SignUpAwal;



