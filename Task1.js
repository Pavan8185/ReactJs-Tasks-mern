import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const wordCount = text.split(/\s+/).filter(word => word !== "").length;

  return (
    <div className="App">
      <h1>Responsive Word Counter</h1>
      <textarea
        rows="10"
        placeholder="Enter your text here..."
        value={text}
        onChange={e => setText(e.target.value)}
      ></textarea>
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default App;
