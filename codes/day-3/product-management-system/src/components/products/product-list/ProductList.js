import React, { Component } from 'react'
import { productRecords } from '../../../repository/productRecords'
import ProductRow from '../product-row/ProductRow'


export default class ProductList extends Component {
    state = {
        records: productRecords
    }
    render() {
        // const mainDivStyle = { border: '2px solid black', borderRadius: '5px', margin: '5px' }
        const headerStyle = { backgroundColor: 'burlywood' }
        return (
            <div className="panel panel-prinary">
                <div className="panel panel-heading">
                    <h4>
                        {this.state.records.length} Record(s) found..
                    </h4>
                </div>
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
            </div>
        )
    }
}
