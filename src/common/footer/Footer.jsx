import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <img src="/static/media/logo.fbe45a1c6a198423fdef30faddbf45e9.svg" alt=""></img>
            <p>Aplikasi marketplace fashion yang didukung oleh teknologi AR swapping clothes yang dapat memilih baju sesuai selera
              dan bisa custom sendiri baju yang diinginkan oleh desainer dan konveksi pilihan anda sendiri
            </p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Pens Sky Venture, Politeknik Elektronika Negeri Surabaya </li>
              <li>Email: sandangs@gmail.com</li>
              <li>Phone: 0854327362736</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
