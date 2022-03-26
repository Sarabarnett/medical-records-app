import logo from './logo.svg';
import './App.css';
import API from './utils/API';

function App() {

  const apifun = async () => {
    try {
      const response = await API.getUsers()
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={apifun}></button>
      </header>
    </div>
  );
}

export default App;
