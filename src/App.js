import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <p>📖</p>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Ana Ribeiro and it is{" "}
            <span>
              <a
                href="https://github.com/AnaBRibeiro/dictionary-react-app"
                target="_blank"
                rel="noreferrer"
                className="github-link"
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
