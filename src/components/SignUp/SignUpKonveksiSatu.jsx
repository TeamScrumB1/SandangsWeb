import React, { Component } from "react";
import "./style.css";
import { Link } from 'react-router-dom';

class SignUpKonveksiSatu extends Component {
  render() {
    return (
      <form>
        <div class="image_signup">
          <img src="././images/sandangs/sandangsblue.png" alt=""></img>
        </div>
        <h3>Identitas Konveksi</h3>
        <div className="mb-3">
          <label>Nomor Induk Berusaha (NIB)</label>
          <input
            type="number"
            className="form-control"
            placeholder="Nomor Induk Berusaha (NIB)"
          />
        </div>
        <div className="mb-3">
          <label>Alamat</label>
          <input type="text" className="form-control" placeholder="Alamat" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Nomor Telpon</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nomor Telpon"
          />
        </div>
        <div className="mb-3">
          <label>Nomor Pokok Wajib Pajak (NPWP)</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nomor Pokok Wajib Pajak (NPWP)"
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

export default SignUpKonveksiSatu;
