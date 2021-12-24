import { useState } from 'react';
import './App.css';
import Value from './Value';

function App() {
  console.log('App rendered')
  const [valState, setValState] = useState(0)
  const [objState, setObjState] = useState({ a: 0, name: 'anil' })
  const [statusState, setStatusState] = useState(true)

  return (
    <div className="App">
      <button onClick={
        () => {
          setStatusState(
            (prevStatus) => {
              return !prevStatus
            }
          )
        }
      }>{statusState ? 'Hide' : 'Show'}</button>
      <br />
      {statusState && <Value valueData={valState} />}
      <br />
      <button onClick={
        () => {
          //setValState(10)
          setValState(
            (oldNum) => {
              return oldNum + 1
            }
          )
        }
      }>Increase</button>
      <br />
      <br />
      A:&nbsp;{objState.a}
      <br />
      Name:&nbsp;{objState.name}
      <br />
      <button onClick={
        () => {
          setObjState(
            (prevObj) => {
              return {
                ...prevObj,
                a: 10,
                name: 'sunil'
              }
            }
          )
        }
      }>Update</button>
    </div>
  );
}

export default App;
