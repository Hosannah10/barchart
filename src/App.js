import logo from './logo.svg';
import './App.css';
import Ebarchart from './Charts/Ebarchart';
import Bbarchart from './Charts/Bbarchart';
import Lbarchart from './Charts/Lbarchart';

function App() {
  return (
    <div className="App">
      <Ebarchart />
      <Bbarchart />
      <Lbarchart />
    </div>
  );
}

export default App;
