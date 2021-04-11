import logo from "../../assets/logo.svg";
import Hello from "./Hello";
import "./home.css";

export default function Home() {
  return (
    <header>
      <div className="homeContainer">
        <div>
          <img src={logo} className="App-logo-home" alt="logo" />
          {process.env.HOST}
          <p>
            Edit <code>src/App.tsx</code> and save to reload ??. <br />
            This text should wrap around the logo nicely yo.
          </p>
        </div>

        <div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn it !! Ts and React link.
          </a>
          <Hello name="TypeScript" enthusiasmLevel={10} />
        </div>
      </div>
    </header>
  );
}
