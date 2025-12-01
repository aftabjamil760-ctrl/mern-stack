// src/App.jsx
import React from "react";
import { useEffect, useState } from "react";


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/hello`)
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>React + Node.js Connected 🎉</h1>
      <p>{data || "Loading..."}</p>
    </div>
  );
}

export default App;
