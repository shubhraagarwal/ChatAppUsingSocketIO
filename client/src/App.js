import "./App.css";
import React, { useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {
  const [active, setActive] = useState(true);
  const [input, setInput] = useState("");
  const [id, setId] = useState("");

  return (
    <div>
      <div className="border-solid border-2 border-gray-400 w-6/12 flex mx-auto mt-20">
        {id === "" ? (
          <div className="flex h-40 flex-col justify-around">
            <h1>Create an ID</h1>
            <input
              type="text"
              placeholder="Enter your ID"
              className="w-full border-solid border-gray-500 border-b-2"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button
              className="bg-blue-600"
              onClick={() => {
                setId(input);
              }}
            >
              Create ID
            </button>
          </div>
        ) : (
          <Dashboard id={id} />
        )}
      </div>
    </div>
  );
}

export default App;
