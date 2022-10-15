import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the site EscapeWithCookie!
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/escapewithcookie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/oshinit/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </header>
    </div>
  );
}

export default App;
