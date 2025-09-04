import { useEffect, useState } from "react";
import { TypingTextProps } from "@/src/types/types"; // Adjust the import path as necessary

export const TypingText = ({ text, delay }: TypingTextProps) => {
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
