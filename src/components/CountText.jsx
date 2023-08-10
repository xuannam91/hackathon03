import React from "react";
import "./CountText.css";

function CountText({lengthText, countLetter, paragraphNumber}) {
  return (
    <div className="item-box">

      <div className="item-element">
        <h5>Word</h5>
        <p>{lengthText}</p>
      </div>

      <div className="item-element">
        <h5>Letter</h5>
        <p>{countLetter}</p>
      </div>

      <div className="item-element">
        <h5>Paragraph</h5>
        <p>{paragraphNumber}</p>
      </div>

    </div>
  );
}

export default CountText;
