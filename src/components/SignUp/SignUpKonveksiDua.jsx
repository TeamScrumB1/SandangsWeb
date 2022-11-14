import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class SignUpKonveksiDua extends Component {
  render() {
    return (
      <form>
        <div class="image_signup">
          <img src="././images/sandangs/sandangsblue.png" alt=""></img>
        </div>
        <h3>Identitas Konveksi</h3>
        <div className="mb-3">
          <label>Foto KTP</label>
          <input type="file" className="form-control" placeholder="Foto KTP" />
        </div>
        <div className="mb-3">
          <label>Banner Identitas / Logo</label>
          <input
            type="file"
            className="form-control"
            placeholder="Banner Identitas / Logo"
          />
        </div>
        <div className="mb-3">
          <label>Foto Tempat Usaha</label>
          <input
            type="file"
            className="form-control"
            placeholder="Foto Tempat Usaha"
          />
        </div>
        <div className="d-grid">
          <Link to="/signupkonveksidua">
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

export default SignUpKonveksiDua;
