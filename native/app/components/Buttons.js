"use client";

import { useState } from "react";

export default function Buttons({ alphabet, words }) {
  const [displayWords, setDisplayWords] = useState([]);

  const pickWord = (letter) => {
    const wordsList = words.filter((item) => item.letter === letter);
    console.log(
      `you picked ${letter} and there is simple words represents the ${wordsList[0].items.join(
        " "
      )}`
    );
    setDisplayWords(wordsList[0].items);
  };
  return (
    <div className="flex flex-col w-full">
      <div className="flex space-x-3 flex-wrap ">
        {alphabet.map((letter, index) => (
          <button
            className="p-5 rounded-2xl bg-white/20 hover:bg-gray-400/30"
            key={index}
            onClick={() => pickWord(letter)}
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="flex space-x-3">
        {displayWords.length > 0 &&
          displayWords.map((word, key) => <span key={key}>{word}</span>)}
      </div>
    </div>
  );
}
