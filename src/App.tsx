import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are ya sure??",
  "Really really sure???",
  "Really really really sure??",
  "Pookie pleaseeee",
  ":(((",
  "Don't do this...",
  "I'm crying what",
  "You're breaking me heart...",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <a
            href="https://docs.google.com/document/d/1g6vkX9TUUAIc_YO2TRv-5nQO5OWJ0mtHURpW-BA3_Lw/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="bears kissing"
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kiss.gi"
            />
          </a>
          <div className="text">I love you! Click on the bears!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bears with hearts"
            src="https://media.tenor.com/It-tMuyAkwIAAAAi/%E3%81%AA%E3%82%93%E3%81%A7%E3%82%82%E3%81%AA%E3%81%84-%E7%84%A6%E3%82%8B.gif"
          />
          <div>Do you want to read my letter??</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>

            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
