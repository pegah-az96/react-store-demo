import React, {Component} from 'react';
import {connect} from 'react-redux'
import {filterProducts,sortProducts} from "../actions/productActions";

class Filter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    {`${this.props.filteredProducts.length} products found.`}
                </div>
                <div className="col-md-3">
                    <label >
                        ordered by :
                        <select className="form-control" onChange={e =>this.props.sortProducts(this.props.filteredProducts,e.target.value)}>
                            <option value="">sort</option>
                            <option value="lowest">Lowest to Highest</option>
                            <option value="highest">Highest to Lowest</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-3">
                    <label >
                        Filter size :
                        <select
                            className="form-control"
                            value={this.props.size}
                            onChange={(event) => {
                                this.props.filterProducts(
                                    this.props.products,
                                    event.target.value
                                );
                            }}
                        >
                            <option value="">All</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </label>
                </div>
                
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
    size: state.products.size,
    sort: state.products.sort,
});
export default connect(mapStateToProps, { filterProducts, sortProducts })(
    Filter
);
