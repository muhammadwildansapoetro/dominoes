import { useState } from "react";
import {
  countDoubleNumber,
  flipNumber,
  removeDuplicates,
  sortAscending,
  sortDescending,
} from "./utils";

function App() {
  const originalDominoes = [
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 2],
  ];

  const [dominoes, setDominoes] = useState<number[][]>(originalDominoes);

  const [inputNumber, setInputNumber] = useState<number | "">("");
  const [noMatch, setNoMatch] = useState<boolean>(false);

  const handleRemove = () => {
    if (inputNumber === "") return;
    const number = Number(inputNumber);
    const filteredDominoes = dominoes.filter((domino) => {
      const sum = domino[0] + domino[1];
      return sum !== number;
    });

    setDominoes(filteredDominoes);

    if (filteredDominoes.length === dominoes.length) {
      setNoMatch(true);
    } else {
      setNoMatch(false);
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-center py-10">
          <div className=" flex-col flex justify-start items-start w-fit border rounded-lg p-5 shadow-lg">
            <h1 className="text-2xl font-bold">Dominoes</h1>

            <div className="border p-2 rounded-md mt-3 w-full bg-green-50">
              <h1 className="font-bold">Source</h1>
              <p className="mt-2">{JSON.stringify(dominoes)}</p>
            </div>

            <div className="border p-2 rounded-md mt-3 w-full bg-green-50">
              <h1 className="font-bold">Double Numbers</h1>
              <p className="mt-2">{countDoubleNumber(dominoes)}</p>
            </div>

            <div className="mt-5">
              <h2 className="font-bold">Domino Cards</h2>
              <div className="flex flex-wrap mt-2">
                {dominoes.map((domino, index) => (
                  <div
                    key={index}
                    className="border rounded-md border-green-500 m-2 w-20 h-36 flex items-center justify-center bg-white shadow-md"
                  >
                    <div className="text-xl font-medium flex flex-col items-center justify-center gap-4">
                      <div>{domino[0]}</div>
                      <div>{domino[1]}</div>
                    </div>
                  </div>
                ))}
              </div>
              {noMatch && (
                <p className="text-red-500 mt-2">
                  No domino cards found with the same total sum.
                </p>
              )}
            </div>

            <div className="mt-5 flex gap-3">
              <button
                onClick={() => sortAscending(dominoes, setDominoes)}
                className="bg-green-500 px-2 py-1 shadow-md rounded-md text-white hover:bg-green-600"
              >
                Sort Ascending
              </button>
              <button
                onClick={() => sortDescending(dominoes, setDominoes)}
                className="bg-green-500 px-2 py-1 shadow-md rounded-md text-white  hover:bg-green-600"
              >
                Sort Descending
              </button>
              <button
                onClick={() => flipNumber(dominoes, setDominoes)}
                className="bg-green-500 px-2 py-1 shadow-md rounded-md text-white  hover:bg-green-600"
              >
                Flip
              </button>
              <button
                onClick={() => removeDuplicates(dominoes, setDominoes)}
                className="bg-green-500 px-2 py-1 shadow-md rounded-md text-white  hover:bg-green-600 "
              >
                Remove Duplicate
              </button>
              <button
                onClick={() => setDominoes(originalDominoes)}
                className="bg-green-500 px-2 py-1 shadow-md rounded-md text-white  hover:bg-green-600"
              >
                Reset
              </button>
            </div>

            <div className="mt-5 flex flex-col items-start">
              <input
                type="number"
                placeholder="Input number"
                value={inputNumber}
                onChange={(e) => setInputNumber(Number(e.target.value))}
                className="border p-1 outline-none focus:outline-green-500 rounded-md"
              />
              <button
                onClick={handleRemove}
                className="mt-3 px-2 py-1 bg-green-500 hover:bg-green-600 rounded-md text-white"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
