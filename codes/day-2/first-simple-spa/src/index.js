//bootstrapper file
import { App } from "./app/App";
import ReactDOM from 'react-dom'

const appReactDesign = App()
const placeholder = document.getElementById('root')

// placeholder.appendChild(appDesign)
ReactDOM.render(appReactDesign, placeholder)