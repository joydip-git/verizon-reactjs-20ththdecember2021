import './App.css';
import { Component, createContext } from 'react';

const ThemedContext = createContext('white')

class App extends Component {
  render() {
    return (
      <ThemedContext.Provider value='yellow'>
        <Toolbar />;
      </ThemedContext.Provider>
    )
  }
}
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
      <br />
      <br />
      <OtherButton />
    </div>
  );
}

class ThemedButton extends Component {
  static contextType = ThemedContext
  render() {
    return (
      <button style={{ backgroundColor: this.context }}>
        Themed Button
      </button>
    );
  }
}

function OtherButton(props) {
  return (
    <ThemedContext.Consumer>
      {
        (value) =>
          <button style={{ backgroundColor: value }}>Other Button</button>
      }
    </ThemedContext.Consumer>
  )
}

export default App;
