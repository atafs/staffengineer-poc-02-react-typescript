// src/App.tsx
import React from "react";
import { useAppSelector, useAppDispatch } from "./types/hooks";

const App: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Counter App</h1>
      <p className="text-lg text-gray-700 mb-6">Count: {count}</p>
      <div className="flex space-x-4">
        <button
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 active:bg-red-700 transition duration-300 ease-in-out"
          onClick={() => dispatch({ type: "counter/increment" })}
        >
          Increment
        </button>
        <button
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 active:bg-green-700 transition duration-300 ease-in-out"
          onClick={() => dispatch({ type: "counter/decrement" })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
