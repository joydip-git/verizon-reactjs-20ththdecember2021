import { Welcome } from "../welcome/Welcome";
import { Introduction } from "../introduction/Introduction";
//import React from "react";

/*
//app component (root)
export function app() {

    const appDiv = document.createElement('div', { id: 'appDiv' })
    const welcomeElement = welcome()
    const introElement = introduction()

    appDiv.appendChild(welcomeElement)
    appDiv.appendChild(document.createElement('hr'))
    appDiv.appendChild(introElement)

    return appDiv
}
*/
/*
export function App() {

    const welcomeReactElement = Welcome()
    const introReactElement = Introduction()

    const appReactDivElement = React.createElement(
        'div',
        { id: 'appDiv' },
        [welcomeReactElement, React.createElement('br'), introReactElement]
    )
    
    return appReactDivElement
}
*/
export function App() {

    // const welcomeReactElement = Welcome()
    // const introReactElement = Introduction()

    const appReactDivElement = (
        <div id='appDiv'>
            {/* {welcomeReactElement} */}
            <Welcome />
            <br />
            {/* {introReactElement} */}
            <Introduction />
        </div>
    )

    return appReactDivElement
}