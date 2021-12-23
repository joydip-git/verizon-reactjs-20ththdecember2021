import React, { Component } from 'react'
import Name from './Name'
import Value from './Value'

export default class Parent extends Component {
    state = {
        nameValue: '',
        numberValue: 0
    }
    nameValueHandler = (newName) => {
        this.setState({
            nameValue: newName
        })
    }
    numberValueHandler = () => {
        this.setState(
            (prevState) => {
                return {
                    numberValue: prevState.numberValue + 1
                }
            }
        )
    }
    render() {
        const { nameValue, numberValue } = this.state
        return (
            <div>
                <Name nameData={nameValue} nameHandler={this.nameValueHandler} />
                <br />
                <br />
                <Value valueData={numberValue} valueHandler={this.numberValueHandler} />
            </div>
        )
    }
}
