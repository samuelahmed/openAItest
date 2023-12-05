"use client";

import { useState, useEffect } from "react";

export default function Embedding() {
  const [result, setResult] = useState("");

  useEffect(() => {
    //fetch data
    const fetchData = async () => {
      const response = await fetch("/api/embedding");
      const data = await response.json();

      //set data
      setResult(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    //read data in console
    console.log(result);
  }, [result]);

  return (
    <div>
      {/* display data in UI */}
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}
