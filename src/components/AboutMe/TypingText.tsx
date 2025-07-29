import { useEffect, useState } from "react";

export const TypingText = ({ text, delay }) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typedText !== text) {
        setTypedText(typedText + text[typedText.length]);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [typedText, text, delay]);

  return <>{typedText}</>;
};
