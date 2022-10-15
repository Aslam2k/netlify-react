import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Escape with Cookie
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/escapewithcookie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </header>
    </div>
  );
}

export default App;
