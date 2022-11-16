import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class SignUpDesainer extends Component {
  render() {
    return (
      <form>
        <div class="image_signup">
          <img src="././images/sandangs/sandangsbiru.png" alt=""></img>
        </div>
        <h3>Sign Up Desainer</h3>
        <div className="mb-3">
          <label>Nama</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nama anda"
          />
        </div>
        <div className="mb-3">
          <label>Email </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <label>Alamat</label>
          <input
            type="text"
            className="form-control"
            placeholder="Alamat anda"
          />
        </div>
        <div className="mb-3">
          <label>Foto KTP</label>
          <input type="file" className="form-control" placeholder="Foto KTP" />
        </div>
        <div className="mb-3">
          <label>Nama Desainer</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nama Desainer"
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
        <div className="mb-3">
          <label>Logo / Banner Identitas</label>
          <input
            type="file"
            className="form-control"
            placeholder="Logo / "
          />
        </div>
        <div className="mb-3">
          <label>Link Portofolio</label>
          <input
            type="url"
            className="form-control"
            placeholder="Link Portofolio"
          />
        </div>
        <div className="d-grid">
          <Link to="/">
            <button type="submit" className="btn btn-primary">
              Submit
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

export default SignUpDesainer;
