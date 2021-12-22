import React, { Component } from 'react'

export default class Value extends Component {

    state = {
        x: 0
    }

    updateXHandler() {
        // let temp = this.state.x
        // temp++
        // this.setState({
        //     x: temp
        // },
        // () => {
        //     console.log(this.state)
        // })
        this.setState(
            (s) => {
                return {
                    x: s.x + 1
                }
            },
            //this callback will be executed after setState finished state updation and finished calling render
            () => {
                console.log(this.state)
            }
        )

    }
    render() {
        return (
            <div>
                <span>Value: &nbsp; {this.state.x}</span>
                <br />
                <button onClick={this.updateXHandler.bind(this)}>Increase</button>
            </div>
        )
    }
}

