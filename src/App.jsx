import { useEffect, useState } from "react";
import Checkbox from './components/Checkbox';
import Graph from './components/Graph'
import './App.css';


function App() {
  const [prefNum, setprefNum] = useState([])

  return (
    <div className="App">
      <h1>都道府県グラフ</h1>
      <Checkbox />
      <Graph />
    </div>
  );
}

export default App;
