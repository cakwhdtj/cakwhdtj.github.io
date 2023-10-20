import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <script src="https://extension-files.twitch.tv/helper/v1/twitch-ext.min.js"></script>
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
      </header>
    </div>
  );
}

export default App;
