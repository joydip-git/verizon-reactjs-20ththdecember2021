import { Welcome } from "../welcome/Welcome";
import { Introduction } from "../introduction/Introduction";
import React from "react";

export function App() {

    const appReactDivElement = (
        <div id='appDiv'>
            <Welcome />
            <br />
            <Introduction />
        </div>
    )
    return appReactDivElement
}