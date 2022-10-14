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
        desainer:[],
        response:'',
        display:"none",
    }
}

componentDidMount(){
    axios.get(api).then(res => {
      this.setState({
        desainer: res.data.produk
      })
    } )
}

render() {
    return (
        <><>
                {this.state.desainer.map((desainer) => {
                    return (
                        <div className='box'>
                        <div className='product mtop'>
                          <div className='img'>
                            <span className='discount' key={desainer.id}>{desainer.discount}% Off</span>
                            <img src={desainer.img_produk} key={desainer.id} alt='' />
                            <div className='product-like'>
                              <label>{}</label> <br />
                              <i className='fa-regular fa-heart' onClick={{}}></i>
                            </div>
                          </div>
                          <div className='product-details'>
                            <h3 key={desainer.id}>{desainer.nama}</h3>
                            <div className='rate'>
                              <i className='fa fa-star'></i>
                              <i className='fa fa-star'></i>
                              <i className='fa fa-star'></i>
                              <i className='fa fa-star'></i>
                              <i className='fa fa-star'></i>
                            </div>
                            <div className='price'>
                              <h4 key={desainer.id}>Rp {desainer.harga} </h4>
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
