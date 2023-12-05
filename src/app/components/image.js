"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ImageC() {
  const [result, setResult] = useState("");
  const [clientContent, setClientContent] = useState(
    "Input text to see full API response"
  );

  const fetchData = async () => {
    const response = await fetch("/api/image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: clientContent }),
    });
    const data = await response.json();
    setResult(data);
  };

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <>
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold">Image ()</h1>
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
      <pre className="overflow-auto max-w-7xl">
        {JSON.stringify(result, null, 2)}
      </pre>
      <img
        src={
          result.image && result.image.data[0] ? result.image.data[0].url : ""
        }
        alt="Image"
        width={500}
        height={500}
      />
    </>
  );
}
