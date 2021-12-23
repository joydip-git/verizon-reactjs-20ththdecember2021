import React, { Component } from 'react'
import { getProducts } from '../../../services/productService'
import ProductRow from '../product-row/ProductRow'


export default class ProductList extends Component {
    state = {
        records: [],
        fetchStatus: false,
        errorMessage: ''
    }

    render() {
        // const mainDivStyle = { border: '2px solid black', borderRadius: '5px', margin: '5px' }
        const headerStyle = { backgroundColor: 'burlywood' }
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
                <div className="panel panel-prinary">
                    <div className="panel panel-heading">
                        <h4>
                            {this.state.records.length} Record(s) found..
                        </h4>
                    </div>
                    {
                        this.state.records.length > 0 &&
                        (
                            <div className="panel panel-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead style={headerStyle}>
                                            <tr>
                                                <td>Image</td>
                                                <td>Name</td>
                                                <td>Price</td>
                                                <td>Rating</td>
                                                <td>Delete</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.records.map(
                                                    (p) => {
                                                        return <ProductRow product={p} key={p.productId} />
                                                    }
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    }
                </div>
            )
        }

        return design
    }

    componentDidMount() {
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
