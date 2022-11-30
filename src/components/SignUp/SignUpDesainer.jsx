import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

function PostApi() {
  const url = "http://api.yufagency.com/signup_desainer";
  const [postdata, setPostdata] = useState([]);


  // const getDataPost = async () => {
  //   const response = await fetch(url);
  //   const dataPost = await response.json();
  //   setPostdata(dataPost);
  //   console.log(postdata);
  // };


  useEffect(() => {
    getDataPost();
  }, []);

  async function getDataPost()
  {
    let result = await fetch("http://api.yufagency.com/signup_desainer");
    result = await result.json();
    setPostdata(result.reverse())
    console.log(result);
    
  }

  return (
    <div className="Post">
      {postdata.map((item) => {
        return (
            <CardPost 
                key={item.IdPost} 
                idPost={item.IdPost}
                id={item.IdPengepost} 
                nama={item.NamaPengepost} 
                judul={item.JudulPost} 
                isi={item.IsiPost} 
                tgl={item.created_at} 
                image={item.img_path}
                 />
        );
      })}
    </div>
  );
};


function SignUpDesainer() {

  const url = "http://api.yufagency.com/signup_desainer";
  const [data, setData] = useState({
    nama: "",
    email: "",
    password: "",
    alamat: "",
    foto_ktp: "",
    nama_desainer: "",
    npwp: "",
    foto_logo: "",
    link_portofolio: "",
  });

  const formData = new FormData();
  formData.append("nama", data.nama);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("alamat", data.alamat);
  formData.append("foto_ktp", data.foto_ktp);
  formData.append("nama_desainer", data.nama_desainer);
  formData.append("npwp", data.npwp);
  formData.append("foto_logo", data.foto_logo);
  formData.append("link_portofolio", data.link_portofolio);

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function handlefile(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.files[0];
    setData(newData);
    console.log(newData);
  }

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        nama: data.nama,
        email: data.email,
        password: data.password,
        alamat: data.alamat,
        foto_ktp: data.foto_ktp,
        nama_desainer: data.nama_desainer,
        npwp: data.npwp,
        foto_logo: data.foto_logo,
        link_portofolio: data.link_portofolio,
      })
      .then((res) => {
        console.log(res);
      });
  }

  //axios post apend

    return (
      <form onSubmit={(e) => submit(e)}>
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
            name="nama"
            id="nama"
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="mb-3">
          <label>Email </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            id="email"
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            id="password"
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="mb-3">
          <label>Alamat</label>
          <input
            type="text"
            className="form-control"
            placeholder="Alamat anda"
            name="alamat"
            id="alamat"
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="mb-3">
          <label>Foto KTP</label>
          <input type="file" className="form-control" placeholder="Foto KTP" 
          name="foto_ktp"
          id="foto_ktp"
          onChange={(e) => handlefile(e)}
          />
        </div>
        <div className="mb-3">
          <label>Nama Desainer</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nama Desainer"
            name="nama_desainer"
            id="nama_desainer"
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="mb-3">
          <label>Nomor Pokok Wajib Pajak (NPWP)</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nomor Pokok Wajib Pajak (NPWP)"
            name="npwp"
            id="npwp"
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="mb-3">
          <label>Logo / Banner Identitas</label>
          <input
            type="file"
            className="form-control"
            placeholder="Logo / "
            name="logo_banner"
            id="logo_banner"
            onChange={(e) => handlefile(e)}
          />
        </div>
        <div className="mb-3">
          <label>Link Portofolio</label>
          <input
            type="url"
            className="form-control"
            placeholder="Link Portofolio"
            name="link_portofolio"
            id="link_portofolio"
            onChange={(e) => handle(e)}
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

export default SignUpDesainer;

