import React, {Component} from 'react';
import {connect} from 'react-redux'
import {removeFromCart} from "../actions/cartActions";

class Basket extends Component {
    render() {
        const {cartItems} =this.props
        return (
            <div className="alert alert-info">
                {cartItems.length === 0 ? "The Basket Is Empty" : `you have ${cartItems.length} items in the basket`}
                {cartItems.length > 0 &&
                <div>
                    <ul style={{ marginLeft: -25 }}>
                        {cartItems.map(item =>
                            <li>
                                <h6>{item.title}</h6>
                                <b>X {item.count} = {item.price * item.count}</b>
                                <button className="btn btn-danger ml-2 btn-sm" onClick={(e) =>this.props.removeFromCart(this.props.cartItems,item)}>Remove</button>
                            </li>
                        )}
                    </ul>
                   <b> Total Price : {cartItems.reduce((a,c) => a+c.price * c.count,0)}</b>
                    <br/>
                    <button className="btn btn-info" onClick={() => alert("checkout needs to be implemented ...")}>CheckOut</button>
                </div>}
            </div>
        );
    }
}
const mapStateToProps =state =>({cartItems:state.cart.items})
export default connect(mapStateToProps,{removeFromCart})(Basket);