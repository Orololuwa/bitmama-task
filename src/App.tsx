import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./config/firebase-config";

const auth = getAuth(app);
const provider = new GithubAuthProvider();

function App() {
  const handleClick = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>github</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
