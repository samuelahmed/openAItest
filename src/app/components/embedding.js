"use client";

import { useState } from "react";

export default function Embedding() {
  
  const [result, setResult] = useState("");
  const [clientContent, setClientContent] = useState(
    "Input text to see full API response"
  );

  const fetchData = async () => {
    const response = await fetch("/api/embedding", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: clientContent }),
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div>
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold">
          Embedding (text-embedding-ada-002)
        </h1>
        <input
          type="text"
          value={clientContent}
          onChange={(e) => setClientContent(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={fetchData}
        >
          Fetch Data
        </button>
      </div>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}
