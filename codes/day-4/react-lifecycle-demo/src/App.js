import './App.css';
import Parent from './components/Parent';

function App() {
  console.log('[App] rendered')
  return (
    <div className="App">
      <Parent />
    </div>
  );
}

export default App;
