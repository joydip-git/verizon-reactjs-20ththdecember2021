import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'

// export default class Name extends PureComponent {
export default class Name extends Component {
    // constructor(props) {
    //     super(props)
    //     console.log('[Name] created')
    //     console.log(this.props)
    // }

    constructor() {
        super()
        console.log('[Name] created')
        console.log(this.props)
        //console.log(this.state)
        // this.state = {}
    }
    // state = {

    // }
    static propTypes = {
        nameData: PropTypes.string.isRequired,
        nameHandler: PropTypes.func.isRequired,
        personData: PropTypes.object.isRequired
    }
    shouldComponentUpdate(newProps, newState) {
        // console.log('new Props', newProps)
        // console.log('old Props', this.props)
        // this.state
        console.log('[Name] should update??')
        if (this.props.nameData === newProps.nameData)
            return false

        return true
    }
    render() {
        console.log(this.props)
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
    componentDidMount() {
        console.log('[Name] mounted')
        //fetch data from database/restful api server
        //and then update the state
    }
    componentDidUpdate(oldProps, oldState) {
        if (oldProps.nameData !== this.props.nameData) {
            //fetch data from database/restful api server
            //and then update the state
            console.log('[Name] updated')
        }
    }
    componentWillUnmount(){
        console.log('[Name] unmounted')
    }
}
