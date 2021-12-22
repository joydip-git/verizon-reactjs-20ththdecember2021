//import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
// import { Welcome } from './Welcome';

function App() {
  let welcomeMessage = 'Welcome to React'
  const invoke = function (txtValue) {
    //console.log(e.target.value)
    console.log(txtValue)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Welcome message={welcomeMessage} invokeHandler={invoke} />

        <br />
        <br />
        {/* <Welcome msg={welcomeMessage} invokeHandler={invoke} /> */}
        <Welcome message={welcomeMessage} invokeHandler={invoke}/>
      </header>
    </div>
  );
}

export default App;
/**
 * Welcome({message:'Welcome to React JS' , invokeHandler:Fn})
 * Welcome({message:undefined , invokeHandler:undefined})
 */
