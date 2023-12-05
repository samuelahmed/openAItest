"use client";

import { useState } from "react";
import Embedding from "./embedding";
import Completion from "./completion";

export default function HomeClientWrapper() {
  const [selectedComponent, setSelectedComponent] = useState("Embedding");

  return (
    <div className="w-1/2">
      <div className="flex flex-row space-x-2 py-2">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setSelectedComponent("Embedding")}
        >
          Embedding
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setSelectedComponent("Completion")}
        >
          Completion
        </button>
      </div>
      {selectedComponent === "Embedding" && <Embedding />}
      {selectedComponent === "Completion" && <Completion />}
    </div>
  );
}
