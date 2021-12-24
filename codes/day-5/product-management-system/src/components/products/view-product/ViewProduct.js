import React from 'react'

const ViewProduct = () => {
    return (
        <div className='panel panel-primary' >
            View Product
            <div className='panel-heading' style={{ fontSize: 'large' }}>

                Details of: &nbsp;&nbsp;
                <a className='btn btn-primary' style={{ width: '80px', float: 'right' }}>
                    Edit
                </a>
            </div>

            <div className='panel-body'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-3'>Name:</div>
                            <div className='col-md-6'></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3'>Code:</div>
                            <div className='col-md-6'></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3'>Description:</div>
                            <div className='col-md-6'></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3'>Availability:</div>
                            <div className='col-md-6'></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3'>Price:</div>

                            <div className='col-md-6'></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3'>5 Star Rating:</div>
                            <div className='col-md-6'></div>
                        </div>
                    </div>

                    <div className='col-md-6'>
                    </div>
                </div>
            </div>

            <div className='panel-footer'>
                <a className='btn btn-default' style={{ width: '80px' }} href='#'>
                    <i className='glyphicon glyphicon-chevron-left'></i> Back
                </a>
            </div>
        </div >

    )
}

export default ViewProduct
