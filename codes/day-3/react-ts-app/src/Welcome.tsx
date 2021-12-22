import React from 'react'

type welcomePropTypes = {
    message: string,
    invokeHandler: (val: string) => void
}
export function Welcome(props: welcomePropTypes) {
    return (
        <div>
            {props.message}
            <br />
            <input name='txtValue' type='text' onChange={
                (e) => {
                    props.invokeHandler(e.target.value)
                }
            } />
        </div>
    )
}