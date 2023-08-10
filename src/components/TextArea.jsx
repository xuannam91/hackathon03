import React from "react";
import "./TextArea.css";

function TextArea({handleTextChange, text}) {
  return (
    <div className="element-textarea">
      <textarea
        className="textarea"
        name=""
        id=""
        cols="100"
        rows="10"
        placeholder="Enter/Paste your text here"
        value={text}
        onChange={handleTextChange}
      ></textarea>
    </div>
  );
}

export default TextArea;
