import React from 'react'
import PropTypes from 'prop-types'
import ProductRow from '../product-row/ProductRow'

const ProductTable = ({ products, selectProductIdHandler }) => {
    const headerStyle = { backgroundColor: 'burlywood' }
    return (
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
                        products.map(
                            (p) => {
                                return <ProductRow product={p} key={p.productId} selectHandler={selectProductIdHandler} />
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

ProductTable.propTypes = {
    products: PropTypes.array.isRequired,
    selectProductIdHandler: PropTypes.func.isRequired
}

export default ProductTable
