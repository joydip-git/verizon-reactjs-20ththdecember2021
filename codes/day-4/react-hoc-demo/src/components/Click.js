/*
import React, { Component } from 'react'

class Click extends Component {
    state = {
        value: 0
    }

    valueHandler = () => {
        this.setState(
            (ps) => {
                return {
                    value: ps.value + 1
                }
            }
        )
    }
    render() {
        return (
            <div>
                Value:&nbsp;{this.state.value}
                <br />
                <button onClick={this.valueHandler} >
                    Increase
                </button>
            </div>
        )
    }
}

//Mix-in (mixin)
// const obj = {
//     stateObj: { value: 0 },
//     increase: function () {
//         const copy = { ...this.stateObj }
//         this.stateObj = {
//             ...copy,
//             value: copy.value + 1
//         }
//     }
// }
// Object.assign(Click.prototype, obj)

export default Click;
*/
import React from 'react'
import PropTypes from 'prop-types'

const Click = props => {
    return (
        <div>
            Value:&nbsp;{props.valueData}
            <br />
            <button onClick={props.valueHandler} >
                Increase
            </button>
        </div>
    )
}

Click.propTypes = {
    valueData: PropTypes.number.isRequired,
    valueHandler: PropTypes.func.isRequired
}

export default Click

