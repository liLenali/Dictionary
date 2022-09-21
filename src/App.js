import logo from "./LOGO_min.jpg";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <a
            href="https://clever-peony-b56585.netlify.app/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} className="logo" alt="Logo" />
          </a>
        </header>
        <Dictionary defaultKeyword="sunset" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://clever-peony-b56585.netlify.app/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Olena Lytovchenko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/liLenali?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/teams/lilenali/sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
