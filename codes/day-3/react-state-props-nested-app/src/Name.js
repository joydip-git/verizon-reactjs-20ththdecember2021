import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Name extends Component {

    constructor() {
        super()
        console.log('Name component created')
    }

    static propTypes = {
        nameData: PropTypes.string.isRequired,
        nameDataHandler: PropTypes.func.isRequired
    }

    render() {
        console.log('Name rendered')
        return (
            <div>
                Name Value:&nbsp;<input type='text' value={this.props.nameData} onChange={
                    (e) => {
                        this.props.nameDataHandler(e.target.value)
                    }
                } />
            </div>
        )
    }
}
