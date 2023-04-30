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
      <div className="flex justify-center space-y-4 space-x-3 flex-wrap ">
        {alphabet.map((letter, index) => (
          <button
            className="p-5 rounded-2xl bg-gray-100/10 hover:bg-blue-950/90 backdrop-blur-sm"
            key={index}
            onClick={() => pickWord(letter)}
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="flex pt-10 space-x-5 py-4 text-xl flex-wrap justify-center items-center ">
        {displayWords.length > 0 &&
          displayWords.map((word, key) => (
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 " key={key}>
                {word}
              </span>
            </button>
          ))}
      </div>
    </div>
  );
}
