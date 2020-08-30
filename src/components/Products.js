import React from "react";
import {connect} from 'react-redux'
import {fetchProducts} from "../actions/productActions";
import {addToCart} from "../actions/cartActions";

class Products extends React.Component{
    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        const productItems = this.props.products.map(product=>(
            <div className="col-md-3 thumbnail text-center p-3 border mb-3" key={product.id}>
                <a href={`#${product.id}`} onClick={e =>this.props.addToCart(this.props.cartItems,product)}>
                    <img src={`/products/${product.sku}_2.jpg`} alt={product.title}/>
                    <h5>{product.title}</h5>
                </a>
                <div>
                    <h6>Price :{product.price}$</h6>
                    <button className="btn btn-info" onClick={e =>this.props.addToCart(this.props.cartItems,product)}>Add To Cart</button>
                </div>
            </div>

        ))
        return(
            <div className="row">{productItems}</div>
        )
    }

}
const mapStateToProps=state => ({products:state.products.filteredItems,cartItems:state.cart.items})
export default connect(mapStateToProps,{fetchProducts,addToCart})(Products)