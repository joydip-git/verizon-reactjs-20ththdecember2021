import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function ProductRow({ product }) {
    const imgStyle = {
        margin: '2px',
        width: '50px'
    }
    return (
        <tr>
            <td>
                <div className="img-responsive">
                    <Link to={`/product/${product.productId}`}>
                        <img
                            src={product.imageUrl}
                            alt="NA"
                            style={imgStyle}
                            title={product.productName}
                        />
                    </Link>
                </div>

            </td>
            <td>
                <Link to={`/product/update/${product.productId}`}>
                    {product.productName}
                </Link>
            </td>
            <td>{product.price}</td>
            <td>{product.starRating}</td>
            <td>
                <button className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    )
}
ProductRow.propTypes = {
    product: PropTypes.object.isRequired
}
export default ProductRow
