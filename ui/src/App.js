import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {

  const [state, setState] = React.useState({ count: 0 });

  const handleClick = () => {
    console.log('clicky');
    setState((oldState) => {
      return { ...oldState, count: oldState.count + 1 };
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
      </header>
      <main>
        <h3>FROM THE INTERNET!</h3>
        <button onClick={handleClick}>Increment</button>
        <section>
          Count: {state.count}
        </section>
      </main>
    </div>
  );
}

export default App;
