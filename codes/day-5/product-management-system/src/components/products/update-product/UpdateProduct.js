import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProduct, updateProduct } from '../../../services/productService'

const UpdateProduct = () => {

    // useHref('/products')
    const navigateFn = useNavigate()

    const id = useParams().id

    const [productState, setProductState] = useState({
        productInfo: undefined,
        fetchStatus: false,
        errorMessage: ''
    })


    const productInfoHandler = (newValue, propName) => {
        const copyProduct = { ...productState.productInfo }
        copyProduct[propName] = newValue
        setProductState(
            (prevState) => {
                return {
                    ...prevState,
                    productInfo: copyProduct
                }
            }
        )
    }

    useEffect(
        () => {
            getProduct(+id)
                .then(
                    (resp) => {
                        setProductState(
                            (prevState) => {
                                return {
                                    ...prevState,
                                    productInfo: resp.data,
                                    fetchStatus: true,
                                    errorMessage: ''
                                }
                            }
                        )
                    },
                    (e) => {
                        setProductState(
                            (prevState) => {
                                return {
                                    ...prevState,
                                    productInfo: undefined,
                                    fetchStatus: true,
                                    errorMessage: e.message
                                }
                            }
                        )
                    }
                )
        },
        [id]
    )

    console.log('PU rendered')
    const { productInfo, errorMessage, fetchStatus } = productState

    let design;
    if (fetchStatus === false) {
        design = <span>Loading...</span>
    } else if (errorMessage !== '') {
        design = <span>{errorMessage}</span>
    } else if (!productInfo) {
        design = <span>No record found</span>
    } else {
        design = (
            <form className="form-horizontal" name="productForm">

                <div className="form-group">
                    <label htmlFor="productId" className="col-sm-2 control-label">Id:</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="productId" name="productId" value={productInfo.productId} readOnly />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="productName" className="col-sm-2 control-label">Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="productName" name="productName" placeholder="product name" value={productInfo.productName} onChange={
                            (e) => {
                                productInfoHandler(e.target.value, e.target.name)
                            }
                        } />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="productCode" className="col-sm-2 control-label">Code:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="productCode" name="productCode" value={productInfo.productCode} readOnly />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="releaseDate" className="col-sm-2 control-label">Release Date:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="releaseDate" name="releaseDate" placeholder="product release date" value={productInfo.releaseDate} onChange={
                            (e) => {
                                productInfoHandler(e.target.value, e.target.name)
                            }
                        } />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="col-sm-2 control-label">Description:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="description" name="description" placeholder="product description" value={productInfo.description} onChange={
                            (e) => {
                                productInfoHandler(e.target.value, e.target.name)
                            }
                        } />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="price" className="col-sm-2 control-label">Price:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="price" name="price" placeholder="product price" value={productInfo.price} onChange={
                            (e) => {
                                const val = e.target.value
                                if (val !== '')
                                    productInfoHandler(parseInt(e.target.value), e.target.name)
                            }
                        } />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="starRating" className="col-sm-2 control-label">Star Rating:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="starRating" name="starRating" placeholder="product Rating" value={productInfo.starRating} onChange={
                            (e) => {
                                const val = e.target.value
                                if (val !== '')
                                    productInfoHandler(parseFloat(e.target.value), e.target.name)
                            }
                        } />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="imageUrl" className="col-sm-2 control-label">Image URL:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="imageUrl" name="imageUrl" placeholder="product image" value={productInfo.imageUrl} onChange={
                            (e) => {
                                productInfoHandler(e.target.value, e.target.name)
                            }
                        } />
                    </div>
                </div>
                <div className="container-fluid" style={{ textAlign: 'center' }}>
                    <button type="submit" className="btn btn-primary" onClick={
                        (e) => {
                            e.preventDefault()
                            if (window.confirm('Update?')) {
                                updateProduct(productInfo)
                                    .then(
                                        (resp) => {
                                            navigateFn('/products')
                                        },
                                        (e) => {
                                            console.log(e)
                                        }
                                    )
                            }
                        }
                    }>
                        Submit
                    </button>

                    <button type="submit" className="btn btn-alert">Cancel</button>
                </div>
            </form>
        )
    }
    return design
}

export default UpdateProduct