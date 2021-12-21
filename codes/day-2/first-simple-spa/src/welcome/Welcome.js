/*
//welcome function is known as component function
export function welcome() {

    //data
    const welcomeMessage = 'Welcome to React JS'
    //event handling code
    const welcomeCallback = function () {
        window.alert('entered the div')
    }

    //design
    const welcomeDiv = document.createElement('div', { id: 'welcomeDiv' })
    //appending the data in the design
    welcomeDiv.innerText = welcomeMessage
    //passing the callback to respond to UI event
    welcomeDiv.addEventListener('mouseenter', welcomeCallback)

    return welcomeDiv
}
*/

//import React from "react"

//welcome function is known as component function
export function Welcome() {

    //data
    let welcomeMessage = 'Welcome to React JS'
    //event handling code
    const welcomeCallback = function () {
        //window.alert('entered the div')
        welcomeMessage = 'Say Hi to React JS'
    }

    //design: appending the data in the design and passing the callback to respond to UI event
    // const welcomeReactDivElement = React.createElement('div', { id: 'welcomeDiv', onClick: welcomeCallback }, welcomeMessage)

    //JSX --> JavaScript XML
    const welcomeReactDivElement = (
        <div id='welcomeDiv' onClick={welcomeCallback}>
            {welcomeMessage}
        </div>
    )

    return welcomeReactDivElement
}