import './App.css';
import {useState} from "react";

function App() {
  const [show, setShow] = useState();

  return (
    <div className="App">
        {show ? 'Hello World' : 'World Hello'}
        <button onClick={() => setShow(!show)}>check</button>
    </div>
  );
}

export default App;
