import React, { Component } from 'react'
import Name from './Name'
import Value from './Value'

export default class Parent extends Component {
    constructor() {
        super()
        console.log('Parent created')
    }
    state = {
        nameVal: '',
        numVal: 0
    }
    updateNumValHandler = () => {
        this.setState(
            (prevState) => {
                return {
                    numVal: prevState.numVal + 1
                }
            }
        )
    }
    updateNameValHandler = (newName) => {
        this.setState({
            nameVal: newName
        })
    }
    render() {
        console.log('Parent rendered')
        return (
            <div>

                <Name nameData={this.state.nameVal} nameDataHandler={this.updateNameValHandler} />

                <br />
                <br />

                <Value numData={this.state.numVal} numDataHandler={this.updateNumValHandler}
                />

            </div>
        )
    }
}
/**
 * const nameObj = new Name()
 * nameObj.props={ nameData:'', nameDataHandler:Fn1 }
 * 
 * Value({numData:0, numDataHandler:Fn2})
 */
