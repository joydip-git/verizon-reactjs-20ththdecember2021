import React from "react"

//welcome function is known as component function
export function Welcome() {

    //data
    let welcomeMessage = 'Welcome to React JS'
    //event handling code
    const welcomeCallback = function () {
        //window.alert('entered the div')
        welcomeMessage = 'Say Hi to React JS'
    }
    
    const welcomeReactDivElement = (
        <div id='welcomeDiv' onClick={welcomeCallback}>
            {welcomeMessage}
        </div>
    )

    return welcomeReactDivElement
}