import React, { Component } from 'react'
import { getProducts } from '../../../services/productService'
import ProductRow from '../product-row/ProductRow'
import ProductUpdate from '../product-update/ProductUpdate'


export default class ProductList extends Component {
    state = {
        records: [],
        fetchStatus: false,
        errorMessage: '',
        selectedProductId: 0
    }

    selectProductIdHandler = (id) => {
        this.setState(
            {
                selectedProductId: id
            },
            () => {
                console.log(this.state.selectedProductId)
            }
        )
    }


    render() {
        // const mainDivStyle = { border: '2px solid black', borderRadius: '5px', margin: '5px' }
        const headerStyle = { backgroundColor: 'burlywood' }
        const { records, fetchStatus, errorMessage, selectedProductId } = this.state
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
                                                    records.map(
                                                        (p) => {
                                                            return <ProductRow product={p} key={p.productId} selectHandler={this.selectProductIdHandler} />
                                                        }
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )
                        }
                        <br />
                        <br />
                        {
                            selectedProductId > 0 && (<ProductUpdate selectedId={selectedProductId} loadHandler={this.loadProducts}/>)
                        }
                    </div>
                </div>
            )
        }

        return design
    }

    componentDidMount() {
        // setTimeout(() => {
        this.loadProducts()
        // }, 2000)
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
