/*
import React, { Component } from 'react'

export default class Hover extends Component {
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
            <div onMouseOver={this.valueHandler}>
                Hover to increase
                <br/>
                Value:&nbsp;{this.state.value}
            </div>
        )
    }
}
*/
import React from 'react'
import PropTypes from 'prop-types'

const Hover = props => {
    return (
        <div onMouseOver={props.valueHandler}>
            Hover to increase
            <br />
            Value:&nbsp;{props.valueData}
        </div>
    )
}

Hover.propTypes = {
    valueData: PropTypes.number.isRequired,
    valueHandler: PropTypes.func.isRequired
}

export default Hover

