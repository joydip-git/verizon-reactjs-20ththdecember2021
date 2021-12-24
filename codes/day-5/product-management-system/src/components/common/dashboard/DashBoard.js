import React, { Fragment } from 'react'

const DashBoard = () => {
    return (
        <Fragment x={10}>
            <h1>Product Management System</h1>
            <nav className="navbar navbar-default">

                <button type="button" className="btn btn-group">
                    Home
                </button>


                <button type="button" className="btn btn-group">
                    Products
                </button>


                <button type="button" className="btn btn-group">
                    Add Product
                </button>

            </nav>
        </Fragment>
    )
}

export default DashBoard

// const Frag = (props) => {
   
//     return this.props.children
// }
