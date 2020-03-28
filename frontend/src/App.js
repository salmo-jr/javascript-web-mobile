import React, {useState} from 'react';
import './global.css';
import Routes from './routes';

function App() {
  return (
    <Routes />
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
