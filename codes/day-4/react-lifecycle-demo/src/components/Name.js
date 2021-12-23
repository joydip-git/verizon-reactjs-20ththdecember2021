import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Name extends Component {
    constructor() {
        super()
        console.log('[Name] created')
    }
    static propTypes = {
        nameData: PropTypes.number.isRequired,
        nameHandler: PropTypes.func.isRequired
    }

    render() {
        console.log('[Name] rendered')
        const { nameData, nameHandler } = this.props
        return (
            <div>
                Name:&nbsp;
                <input type='text' value={nameData} onChange={
                    (e) => {
                        nameHandler(e.target.value)
                    }
                } />
            </div>
        )
    }
}
