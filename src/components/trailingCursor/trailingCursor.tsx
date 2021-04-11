import React, { useEffect, useState } from "react";
import "./cursor.css";

interface position {
  x?: number;
  y?: number;
}

interface Props {
  containerId: string;
}

export default function TrailingCursor({ containerId }: Props) {
  const [mouseState, setMouseState] = useState<position>({
    x: 0,
    y: 0,
  });
  const [trailingState, setTrailing] = useState<position>({
    x: 0,
    y: 0,
  });

  function handleMouseMove(e: any) {
    const { clientX, clientY } = e;
    setMouseState({ x: clientX, y: clientY });
    setTimeout(() => {
      setTrailing({
        x: clientX,
        y: clientY,
      });
    }, 100);
  }
  useEffect(() => {
    const cont = document.getElementById(containerId);
    if (cont) {
      cont.onmousemove = handleMouseMove;
    }
  }, []);

  return (
    <div className="cursors">
      <div
        id="cursor"
        className="cursor"
        style={{
          left: mouseState.x,
          top: mouseState.y,
        }}
      />
      <div
        className="cursor"
        style={{
          left: trailingState.x,
          top: trailingState.y,
        }}
      />
    </div>
  );
}
