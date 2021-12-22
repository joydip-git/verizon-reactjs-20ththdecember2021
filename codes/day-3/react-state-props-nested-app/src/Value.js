import React from 'react'
import PropTypes from 'prop-types'

const Value = (props) => {
    console.log('value rendered')
    return (
        <div>
            Value:&nbsp;{props.numData}
            <br />
            <br />
            <button onClick={props.numDataHandler}>Increase</button>
        </div>
    )
}

Value.propTypes = {
    numData: PropTypes.number.isRequired,
    numDataHandler: PropTypes.func.isRequired
}

export default Value
