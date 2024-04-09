import './App.css';
import Animal from './components/animal';
import Counter from './components/counter';
import Greeting from './components/greeting';

function App() {
  return (
    <div className="App">
      <h1>Ayush Project</h1>
      <Greeting name="Priya" />
      <Counter />
      <Animal />
    </div>
  );
}

export default App;