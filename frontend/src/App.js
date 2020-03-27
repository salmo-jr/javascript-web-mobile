import React, {useState} from 'react';
import Logon from './pages/Logon/index';
import './global.css';

function App() {
  return (
    <Logon />
  );

  /*
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={Increment}>Incrementar</button>
    </div>
  );
  */
}

export default App;
