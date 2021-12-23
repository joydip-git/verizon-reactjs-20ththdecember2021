import React, { Component } from 'react'
import Click from './Click'
import Hover from './Hover'

class Parent extends Component {
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
                <Click valueData={this.state.value} valueHandler={this.valueHandler} />
                <br />
                <br />
                <Hover valueData={this.state.value} valueHandler={this.valueHandler} />
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

export default Parent;
