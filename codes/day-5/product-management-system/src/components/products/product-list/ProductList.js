import React, { Component } from 'react'
import { getProducts } from '../../../services/productService'
import ProductTable from '../product-table/ProductTable'
import { connect } from 'react-redux'
import { fetchProductsCallbackCreator } from '../../../redux/callbackcreators'


class ProductList extends Component {
    // state = {
    //     records: [],
    //     fetchStatus: false,
    //     errorMessage: ''
    // }

    deleteProductHandler = () => {

    }

    render() {
        // const { records, fetchStatus, errorMessage } = this.state
        const { records, fetchStatus, errorMessage } = this.props
        let design;

        if (fetchStatus === false) {
            design = <span>Loading...</span>
        } else if (errorMessage !== '') {
            design = <span>{errorMessage}</span>
        } else if (records.length === 0) {
            design = <span>No records found</span>
        } else {
            design = (
                <div className='container'>
                    <div className="panel panel-primary">
                        <div className="panel panel-heading">
                            <h4>
                                {records.length} Record(s) found..
                            </h4>
                        </div>
                        {
                            records.length > 0 &&
                            (
                                <div className="panel panel-body">
                                    <ProductTable
                                        products={records} />
                                </div>
                            )
                        }
                    </div>
                </div>
            )
        }

        return design
    }

    componentDidMount() {
        //this.loadProducts()
        this.props.fetchProducts()
    }
    loadProducts = () => {
        getProducts()
            .then(
                (resp) => {
                    this.setState({
                        records: resp.data,
                        fetchStatus: true,
                        errorMessage: ''
                    })
                },
                (err) => {
                    this.setState({
                        records: [],
                        fetchStatus: true,
                        errorMessage: err.message
                    })
                }
            )
    }
}

const mapStateToProps = (stateMap) => {
    return {
        records: stateMap.allProductsState.records,
        fetchStatus: stateMap.allProductsState.fetchStatus,
        errorMessage: stateMap.allProductsState.errorMessage
    }
}
const mapDispatchToProps = (dispatchFnRef) => {
    return {
        fetchProducts: () => {
            const fetchProductsCallback = fetchProductsCallbackCreator()
            dispatchFnRef(fetchProductsCallback)
        }
    }
}

const connectToComponent = connect(mapStateToProps, mapDispatchToProps)
export default connectToComponent(ProductList)
