import React, { useState, useEffect } from "react";

function TypingText({ text, delay }) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typedText !== text) {
        setTypedText(typedText + text[typedText.length]);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [typedText, text, delay]);

  return <p>{typedText}</p>;
}

export default TypingText;
