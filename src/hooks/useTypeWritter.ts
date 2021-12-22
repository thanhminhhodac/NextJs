/* eslint-disable consistent-return */
// libs
import { useState, useEffect } from 'react';

// eslint-disable-next-line no-shadow
enum Phase {
  Typing,
  Deleting,
  Pausing,
}

interface useTypeWritterExport {
  typedText: string;
}

const TYPING_INTERVAL = 150;
const PAUSING_MS = 3000;
const DELETING_INTERVAL = 50;

export const useTypeWritter = (texts: string[]): useTypeWritterExport => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phase, setPhase] = useState(Phase.Typing);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    switch (phase) {
      case Phase.Typing: {
        const nextTypedText = texts[selectedIndex].slice(
          0,
          typedText.length + 1
        );
        if (nextTypedText === typedText) {
          setPhase(Phase.Pausing);
          return;
        }
        const timeout = setTimeout(() => {
          setTypedText(nextTypedText);
        }, TYPING_INTERVAL);
        return () => clearTimeout(timeout);
      }
      case Phase.Deleting: {
        if (!typedText) {
          const nextIndex = selectedIndex + 1;
          setSelectedIndex(texts[nextIndex] ? nextIndex : 0);
          setPhase(Phase.Typing);
          return;
        }
        const nextRemaining = texts[selectedIndex].slice(
          0,
          typedText.length - 1
        );
        const timeout = setTimeout(() => {
          setTypedText(nextRemaining);
        }, DELETING_INTERVAL);
        return () => clearTimeout(timeout);
      }
      case Phase.Pausing:
      default: {
        const timeout = setTimeout(() => {
          setPhase(Phase.Deleting);
        }, PAUSING_MS);
        return () => clearTimeout(timeout);
      }
    }
  }, [texts, phase, typedText, selectedIndex]);

  return { typedText };
};

export default useTypeWritter;
