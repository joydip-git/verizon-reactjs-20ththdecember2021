import React, { useEffect } from 'react'

const Value = ({ valueData }) => {

    useEffect(
        () => {
            console.log('always')
            // return () => {
            //     console.log('do clean up always')
            // }
        }
    )

    useEffect(
        () => {
            return () => {
                console.log('do clean up one time: willUnmount')
            }
        },
        []
    )

    useEffect(
        () => {
            console.log('mounted')
        },
        []
    )

    useEffect(
        () => {
            console.log('fetching. value data: ' + valueData)
            return () => {
                console.log('do clean up only when value data is different')
            }
        },
        [valueData]
    )

    useEffect(
        () => {
            console.log('applying style. value data: ' + valueData)
            return () => {
                console.log('do clean up only when value data is different')
            }
        },
        [valueData]
    )

    console.log('value rendered')
    return (
        <div>
            Value:&nbsp;{valueData}
        </div>
    )
}

export default Value
