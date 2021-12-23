import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends Component {
    state = {
        errorMessage: ''
    }
    static propTypes = {
        errorLogger: PropTypes.func.isRequired
    }
    static getDerivedStateFromError(errorInfo) {
        console.log('[EB] getDerivedStateFromError')
        return {
            errorMessage: errorInfo.Error
        }
    }
    render() {
        console.log('[EB] render')
        //console.log(this.props.children)

        let design;
        if (this.state.errorMessage === '') {
            design = this.props.children
        } else {
            design = <span>Error occurred</span>
        }
        return design
    }
    componentDidCatch(errorInfo, stackTrace) {
        console.log('[EB] catch')
        this.props.errorLogger({ errorInfo, stackTrace })
        // this.setState({
        //     errorMessage: errorInfo.Error
        // })
    }
}
