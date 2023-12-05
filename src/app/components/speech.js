"use client";

import { useState, useRef } from "react";

export default function Speech() {

  const audioRef = useRef();
  const [clientContent, setClientContent] = useState("Input text to see full API response");
  const [voice, setVoice] = useState("alloy");
  const voiceList = ["alloy", "echo", "fable", "onyx", "nova", "shimmer"];

  const fetchData = async () => {
    const response = await fetch("/api/speech", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: clientContent, voice: voice }),
    });
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    audioRef.current.src = url;
  };

  return (
    <div>
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold">Speech (tts-1)</h1>
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
        <select onChange={(e) => setVoice(e.target.value)}>
          {voiceList.map((voice) => (
            <option key={voice} value={voice}>
              {voice}
            </option>
          ))}
        </select>
        <audio ref={audioRef} controls></audio>
      </div>
    </div>
  );
}
