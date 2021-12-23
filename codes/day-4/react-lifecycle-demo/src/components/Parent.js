import React, { Component } from 'react'
import Name from './Name'
import Value from './Value'

export default class Parent extends Component {
    constructor() {
        super()
        console.log('[Parent] created')
    }
    state = {
        person: {
            name: 'anil',
            id: 1,
            salary: 1000
        },
        nameValue: '',
        numberValue: 0,
        show: true
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
                    numberValue: prevState.numberValue + 1,
                    person: {
                        ...prevState.person
                    }
                }
            }
        )
    }
    render() {
        console.log('[Parent] rendered')
        const { nameValue, numberValue, person, show } = this.state
        return (
            <div>
                <button onClick={
                    () => {
                        this.setState(
                            (ps) => {
                                return {
                                    show: !ps.show
                                }
                            }
                        )
                    }
                }>
                    {
                        show ? 'Hide' : 'Show'
                    }
                </button>
                <br/>
                <br/>
                {
                    show && <Name nameData={nameValue} nameHandler={this.nameValueHandler} personData={person} />
                }

                <br />
                <br />

                <Value valueData={numberValue} valueHandler={this.numberValueHandler} />
            </div>
        )
    }
    componentDidMount() {
        console.log('[Parent] mounted')
        //fetch data from database/restful api server
        //make network request using web socket
        //read data from file
        //etc.

        //and then update the state
    }
}
