import React, { Component} from 'react';
import  axios  from 'axios'
// import qs from 'querystring'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./style.css"

// const ShopCart = ({ shopItems, addToCart }) => {
//   const [count, setCount] = useState(0)
//   const increment = () => {
//     setCount(count + 1)
//   }

const api = 'https://api.yufagency.com/produk'

class ShopCart extends Component {
  constructor(props){
    super(props)
    this.state={
        produk:[],
        response:'',
        display:"none",
    }
}

componentDidMount(){
    axios.get(api).then(res => {
      this.setState({
        produk: res.data.produk
      })
    } )
}

render() {
    return (
        <><>
                {this.state.produk.map((produk) => {
                    return (
                        <div className='box'>
                        <div className='product mtop'>
                          <div className='img'>
                            <span className='discount' key={produk.id}>{produk.rating}% Off</span>
                            <img src={produk.img_produk} key={produk.id} alt='' />
                            <div className='product-like'>
                              <label>{}</label> <br />
                              <i className='fa-regular fa-heart' onClick={{}}></i>
                            </div>
                          </div>
                          <div className='product-details'>
                            <h3 key={produk.id}>{produk.nama}</h3>
                            <div className='rate'>
                              <i className='fa fa-star'></i>
                              <i className='fa fa-star'></i>
                              <i className='fa fa-star'></i>
                              <i className='fa fa-star'></i>
                              <i className='fa fa-star'></i>
                            </div>
                            <div className='price'>
                              <h4 key={produk.id}>Rp {produk.harga} </h4>
                              <button onClick={{}}>
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

export default ShopCart
