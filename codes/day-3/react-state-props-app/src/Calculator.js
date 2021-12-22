import React, { Component } from 'react'

// const Calculator = () => {
class Calculator extends Component {
    constructor() {
        super()
        //initial state
        this.state = {
            firstValue: 0,
            secondValue: 0
        }
    }

    addHandler = () => {
        const { firstValue, secondValue } = this.state
        window.alert(firstValue + secondValue)
    }

    render() {
        const { firstValue, secondValue } = this.state
        console.log('calculator rendered in ADOM')
        return (
            <form>
                <div>
                    <label htmlFor='txtFirst'>Enter 1st Value:&nbsp;</label>
                    <input type='text' value={firstValue} onChange={
                        (e) => {
                            let fv = e.target.value
                            //updating state of first value
                            if (fv !== '') {
                            //DO NOT MUTATE THE STATE DIRECTLY, MUTATE THE STATE iMMUTABLY                             
                                this.setState({
                                    firstValue: fv
                                })
                                console.log(this.state)
                            }
                        }
                    } />
                </div>
                <div>
                    <label htmlFor='txtFirst'>Enter 2nd Value:&nbsp;</label>
                    <input type='text' value={secondValue} onChange={(e) => {
                        let sv = e.target.value
                        //updating state of second value
                        if (sv !== '') {
                            this.setState({
                                secondValue: parseInt(e.target.value)
                            })
                        }
                    }} />
                </div>
                <input type='button' value='Add' onClick={this.addHandler} />
            </form >
        )
    }
}

export default Calculator
