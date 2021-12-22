import React from 'react'
import PropTypes from 'prop-types'
//props={message:'Welcome to React JS', invokeHandler:Fn}
function Welcome(props) {

    // let design;
    // if (props.message) {
    //     design = <p>{props.message}</p>
    // } else {
    //     design = <p>{props.msg}</p>
    // }

    return (
        <div>
            {/* {
                    props.message ? props.message : props.msg
                } */}
            {/* {
                props.message && props.message
            } */}
            {/* {
                design
            } */}
            {
                props.message
            }
            <br />
            {/* <button onClick={props.invokeHandler}>Show</button> */}
            <input type='text' onChange={
                (e) => {
                    props.invokeHandler(e.target.value)
                }
            } />
        </div>
    )
}
Welcome.propTypes = {
    message: PropTypes.string.isRequired,
    invokeHandler: PropTypes.func.isRequired,
    // msg: PropTypes.string
}
export default Welcome