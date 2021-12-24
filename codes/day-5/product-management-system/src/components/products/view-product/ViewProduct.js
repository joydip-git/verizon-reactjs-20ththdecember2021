import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
        design = <span>{productInfo.productName}</span>
    }
    return design
    // <div className='panel panel-primary' >
    //     <div className='panel-heading' style={{ fontSize: 'large' }}>

    //         Details of: &nbsp;&nbsp;
    //         <a className='btn btn-primary' style={{ width: '80px', float: 'right' }}>
    //             Edit
    //         </a>
    //     </div>

    //     <div className='panel-body'>
    //         <div className='row'>
    //             <div className='col-md-6'>
    //                 <div className='row'>
    //                     <div className='col-md-3'>Name:</div>
    //                     <div className='col-md-6'></div>
    //                 </div>
    //                 <div className='row'>
    //                     <div className='col-md-3'>Code:</div>
    //                     <div className='col-md-6'></div>
    //                 </div>
    //                 <div className='row'>
    //                     <div className='col-md-3'>Description:</div>
    //                     <div className='col-md-6'></div>
    //                 </div>
    //                 <div className='row'>
    //                     <div className='col-md-3'>Availability:</div>
    //                     <div className='col-md-6'></div>
    //                 </div>
    //                 <div className='row'>
    //                     <div className='col-md-3'>Price:</div>

    //                     <div className='col-md-6'></div>
    //                 </div>
    //                 <div className='row'>
    //                     <div className='col-md-3'>5 Star Rating:</div>
    //                     <div className='col-md-6'></div>
    //                 </div>
    //             </div>

    //             <div className='col-md-6'>
    //             </div>
    //         </div>
    //     </div>

    //     <div className='panel-footer'>
    //         <a className='btn btn-default' style={{ width: '80px' }} href='#'>
    //             <i className='glyphicon glyphicon-chevron-left'></i> Back
    //         </a>
    //     </div>
    // </div >


}

export default ViewProduct
