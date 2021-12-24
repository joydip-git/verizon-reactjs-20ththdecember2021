import React, { Component } from 'react'
import { getProducts } from '../../../services/productService'
import ProductTable from '../product-table/ProductTable'


export default class ProductList extends Component {
    state = {
        records: [],
        fetchStatus: false,
        errorMessage: '',
        selectedProductId: 0
    }

    selectProductIdHandler = (id) => {
        this.setState({
            selectedProductId: id
        })
    }

    deleteProductHandler = () => {
        
    }

    render() {
        const { records, fetchStatus, errorMessage } = this.state
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
                    <div className="panel panel-prinary">
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
                                        products={records}
                                        selectProductIdHandler={this.selectProductIdHandler} />
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
        this.loadProducts()
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
