import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="text-center">
      <header className="App-header min-h-screen flex flex-col items-center justify-center text-white">
        <img
          src={logo}
          className="App-logo pointer-events-none prm:animate-slow"
          alt="logo"
        />
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
