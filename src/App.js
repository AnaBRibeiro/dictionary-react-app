import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Ana Ribeiro and it is{" "}
            <span>
              <a
                href="https://github.com/AnaBRibeiro/dictionary-react-app"
                target="_blank"
                rel="noreferrer"
              >
                open-sourced on GitHub
              </a>
            </span>
          </small>
        </footer>
      </div>
    </div>
  );
}
