import { useEffect, useState } from "react";
import "./ChatDemo.css";

export default function ChatDemo({ messages = [], typingDelay = 900, messageDelay = 1400 }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let index = 0;

    async function playSequence() {
      while (!cancelled) {
        setTyping(true);
        await wait(typingDelay);
        if (cancelled) return;

        setTyping(false);
        index += 1;
        setVisibleCount(index);
        await wait(messageDelay);

        if (index >= messages.length) {
          await wait(1200);
          index = 0;
          setVisibleCount(0);
        }
      }
    }

    playSequence();
    return () => {
      cancelled = true;
    };
  }, [messages, typingDelay, messageDelay]);

  return (
    <div className="chat-demo">
      {messages.slice(0, visibleCount).map((m, i) => (
        <div key={i} className={`chat-bubble chat-bubble--${m.from} chat-bubble--in`}>
          {m.text}
        </div>
      ))}
      {typing && (
        <div className="chat-bubble chat-bubble--bot chat-typing">
          <span></span><span></span><span></span>
        </div>
      )}
    </div>
  );
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
