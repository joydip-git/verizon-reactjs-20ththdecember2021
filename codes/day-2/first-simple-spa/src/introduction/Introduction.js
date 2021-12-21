import React from 'react'

//introduction function is known as component function
export function Introduction() {

    //data
    const introMessage = 'React JS is a UI library, NOT a framework like Angular'

    const introReactDivElement = <div id='introDiv'>{introMessage}</div>

    return introReactDivElement
}