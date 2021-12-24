import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const DashBoard = () => {
    return (
        <Fragment>
            <h1>Product Management System</h1>
            <nav className="navbar navbar-default">

                <Link to='/home'>
                    <button type="button" className="btn btn-group">
                        Home
                    </button>
                </Link>

                <Link to='/products'>
                    <button type="button" className="btn btn-group">
                        Products
                    </button>
                </Link>

                <Link to='/product/add'>
                    <button type="button" className="btn btn-group">
                        Add Product
                    </button>
                </Link>

            </nav>
        </Fragment>
    )
}

export default DashBoard

// const Frag = (props) => {

//     return this.props.children
// }

// const link = ({ to, children }) => {
//     return <a href={to} onClick={(e) => e.preventDefault()}>{children}</a>
// }
