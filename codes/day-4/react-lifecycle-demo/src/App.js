import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
import Parent from './components/Parent';

function App() {
  console.log('[App] rendered')
  const logError = (errorObject) => {
    console.log(errorObject)
  }
  return (
    <div className="App">
      welcome to App
      {/* <Parent /> */}
      <br />
      {/* <ErrorBoundary errorLogger={logError}> */}
      <Parent />
      <br />
      <Hero heroName='Batman' />
      <br />
      <Hero heroName='Superman' />
      <br />
      <ErrorBoundary errorLogger={logError}>
        <Hero heroName='Joker' />
      </ErrorBoundary>
    </div>
  );
}

export default App;
/**
 * const eb = new ErrorBoundary()
 * eb.props={ children: {}, errorLogger:Fn}
 */
