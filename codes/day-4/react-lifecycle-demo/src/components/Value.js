import React from 'react'
import PropTypes from 'prop-types'

const Value = ({ valueData, valueHandler }) => {
    return (
        <div>
            Value:&nbsp;{valueData}
            <br />
            <button onClick={valueHandler}>Increase</button>
        </div>
    )
}

Value.propTypes = {
    valueData: PropTypes.number.isRequired,
    valueHandler: PropTypes.func.isRequired
}

export default Value
