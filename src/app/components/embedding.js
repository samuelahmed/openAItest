"use client";

import { useState, useEffect } from "react";

export default function Embedding() {
  
  const [result, setResult] = useState("");

  const fetchData = async () => {
    const response = await fetch("/api/embedding");
    const data = await response.json();
    setResult(data);
  };

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}
