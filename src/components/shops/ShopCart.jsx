//import React, { useState } from "react"

//const ShopCart = ({ addToCart, shopItems }) => {
//  const [count, setCount] = useState(0)
//  const increment = () => {
//    setCount(count + 1)
//  }

//  return (
//    <>
//      {shopItems.map((shopItems) => {
//        return (
//          <div className='product mtop'>
//            <div className='img'>
//              <span className='discount'>{shopItems.discount}% Off</span>
//              <img src={shopItems.cover} alt='' />
//              <div className='product-like'>
//                <label>{count}</label> <br />
//                <i className='fa-regular fa-heart' onClick={increment}></i>
//              </div>
//            </div>
//            <div className='product-details'>
//              <h3>{shopItems.name}</h3>
//              <div className='rate'>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//              </div>
//              <div className='price'>
//                <h4>${shopItems.price}.00 </h4>
//                <button onClick={() => addToCart(shopItems)}>
//                  <i className='fa fa-plus'></i>
//                </button>
//              </div>
//            </div>
//          </div>
//        )
//      })}
//    </>
//  )
//}

//export default ShopCart



import React, { Component } from "react"
import axios from 'axios';

const api = 'https://api.yufagency.com/produk'

class ShopCart extends Component {
  constructor(props){
    super(props)
    this.state={
      produk:[],
        response:'',
        display:"none",
        keranjangs:[]
    }
}

    componentDidMount(){
      axios.get(api).then(res => {
        this.setState({
          produk: res.data.produk
        })
      } )
  }
  
  masukKeranjang = (value) => {
    console.log("Produk : ", value)
  }

  render() {
      return (
          <><>
                  {this.state.produk.map((produk) => {
                      return (
                          <div className='box'>
                          <div className='product mtop'>
                            <div className='img'>
                              <span className='discount' key={produk.id} masukKeranjang={this.masukKeranjang}>{produk.discount}% Off</span>
                              <img src={produk.img_produk} key={produk.id} alt='' masukKeranjang={this.masukKeranjang} />
                              <div className='product-like'>
                                <label>{}</label> <br />
                                <i className='fa-regular fa-heart' onClick={{}}></i>
                              </div>
                            </div>
                            <div className='product-details'>
                              <h3 key={produk.id} masukKeranjang={this.masukKeranjang}>{produk.nama}</h3>
                              <div className='rate'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                              </div>
                              <div className='price'>
                                <h4 key={produk.id} masukKeranjang={this.masukKeranjang}>Rp {produk.harga} </h4>
                                <button onClick={() => this.masukKeranjang(produk)}>
                                  <i className='fa fa-plus'></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                  })}
              </></>
      );
  }
    }

export default ShopCart;
