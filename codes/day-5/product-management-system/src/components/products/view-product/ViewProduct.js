import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProduct } from '../../../services/productService'

const ViewProduct = () => {
    const params = useParams()

    const [productState, setProductState] = useState({
        loading: true,
        errorMessage: '',
        productInfo: undefined
    })
    useEffect(
        () => {
            getProduct(parseInt(params.id))
                .then(
                    (resp) => {
                        setProductState({
                            loading: false,
                            errorMessage: '',
                            productInfo: resp.data
                        })
                    },
                    (err) => {
                        console.log(err.message)
                        setProductState({
                            loading: false,
                            errorMessage: err.message,
                            productInfo: undefined
                        })
                    }
                )
        },
        [params.id]
    )
    const { loading, errorMessage, productInfo } = productState
    let design;
    if (loading) {
        design = <span>Loading</span>
    } else if (errorMessage !== '') {
        design = <span>{errorMessage}</span>
    } else if (productInfo === undefined) {
        design = <span>record not found</span>
    } else {
        design = (
            <div className='container'>
                <div className='panel panel-primary' >
                    <div className='panel-heading' style={{ fontSize: 'large' }}>

                        Details of: &nbsp;&nbsp;{productInfo.productName}
                        <Link to={`/product/update/${productInfo.productId}`}>
                            <button type='button' className='btn btn-primary' style={{ float: 'right' }}>
                                Edit
                            </button>
                        </Link>
                    </div>

                    <div className='panel-body'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <div className='col-md-3'>Name:</div>
                                    <div className='col-md-6'>{productInfo.productName}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Code:</div>
                                    <div className='col-md-6'>{productInfo.productCode}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Description:</div>
                                    <div className='col-md-6'>{productInfo.description}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Availability:</div>
                                    <div className='col-md-6'>{productInfo.releaseDate}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Price:</div>
                                    <div className='col-md-6'>{productInfo.price}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>5 Star Rating:</div>
                                    <div className='col-md-6'>{productInfo.starRating}</div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <img className='center-block img-responsive' src={productInfo.imageUrl} title={productInfo.productName} alt='NA' style={{ margin: '2px', width: '150px' }} />
                            </div>
                        </div>
                    </div>

                    <div className='panel-footer'>
                        <Link to='/products'>
                            <button type='button' className='btn btn-default' >
                                <i className='glyphicon glyphicon-chevron-left'></i> Back
                            </button>
                        </Link>
                    </div>
                </div >
            </div>
        )
    }
    return design
}

export default ViewProduct
