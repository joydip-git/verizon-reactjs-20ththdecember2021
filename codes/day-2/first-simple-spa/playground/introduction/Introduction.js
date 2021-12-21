/*
//introduction function is known as component function
export function introduction() {

    //data
    const introMessage = 'React JS is a UI library, NOT a framework like Angular'
    
    //design
    const introDiv = document.createElement('div', { id: 'introDiv' })
    //appending the data in the design
    introDiv.innerText = introMessage

    return introDiv
}
*/

//import React from 'react'

//introduction function is known as component function
export function Introduction() {

    //data
    const introMessage = 'React JS is a UI library, NOT a framework like Angular'

    //design and appending the data in the design
    // const introReactDivElement = React.createElement('div', { id: 'introDiv' }, introMessage)

    const introReactDivElement = <div id='introDiv'>{introMessage}</div>

    return introReactDivElement
}