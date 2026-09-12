"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b1120",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1>🚀 Advanced Dashboard</h1>

      <p>Welcome to my interactive dashboard.</p>

      <div
        style={{
          marginTop: "30px",
          padding: "25px",
          background: "#111827",
          borderRadius: "16px",
        }}
      >
        <h2>Activity</h2>

        <p>Button clicked: {count} times</p>

        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: "12px 20px",
            borderRadius: "10px",
            border: "none",
            background: "#22c55e",
            color: "white",
            fontSize: "16px",
          }}
        >
          Click Me
        </button>
      </div>
    </main>
  );
            }
