import React, { useEffect, useRef, useState } from "react";
import "./cursor.css";

interface position {
  x: number;
  y: number;
}

interface Props {
  containerId: string;
  nTrail?: number;
}
function range(size: number, startAt = 0) {
  return [...Array(size).keys()].map((i) => i + startAt);
}

export default function TrailingCursor({ containerId, nTrail = 10 }: Props) {
  const [mouseState, setMouseState] = useState<position>({
    x: 0,
    y: 0,
  });
  const [trailingState, setTrailing] = useState<position[]>(
    range(nTrail).map((el) => {
      return { x: 500, y: 150 };
    })
  );
  const [trailingTiming, setTrailingTiming] = useState("0ms");
  const [timeOut, setTiti] = useState(false);

  var trailingBuffer = range(nTrail, 0).map((el) => {
    return { x: 0, y: 0 };
  });

  useEffect(() => {
    const cont = document.getElementById(containerId);
    if (cont) {
      cont.onmousemove = handleMouseMove;
    }
  }, []);

  // useEffect(() => {
  //   // console.log(mouseState);
  //   const inter = setInterval(() => {
  //     // console.log(mouseState);
  //     setTrailingTiming("1s");
  //     setTrailing(
  //       range(nTrail).map((el) => {
  //         return {
  //           x: mouseState.x + 15 * Math.sin((el / nTrail) * 2 * 3.14),
  //           y: mouseState.y + 15 * Math.cos((el / nTrail) * 2 * 3.14),
  //         };
  //       })
  //     );
  //   }, 100);

  //   return () => clearInterval(inter);
  // }, [mouseState]);

  useEffect(() => {
    if (trailingTiming !== "0ms") setTrailingTiming("0ms");
    if (
      Math.abs(trailingState[trailingState.length - 1].x - mouseState.x) > 0.1 ||
      Math.abs(trailingState[trailingState.length - 1].y - mouseState.y) > 0.1
    ) {
      if (!timeOut) {
        setTiti(true);
        setTimeout(() => {
          const newTrail = trailingState.map((pos, idx) => {
            return {
              x: pos.x + (mouseState.x - pos.x) / (5 + 2 * idx),
              y: pos.y + (mouseState.y - pos.y) / (5 + 2 * idx),
            };
          });
          setTrailing(newTrail);
          setTiti(false);
        }, 10);
      }
    }
  }, [mouseState, trailingState, timeOut]);

  function handleMouseMove(e: MouseEvent) {
    // console.log("handling mouse");
    // if (trailingTiming !== "100ms") setTrailingTiming("100ms");
    const { clientX, clientY } = e;
    setMouseState({ x: clientX, y: clientY });
    // let trailing = trailingBuffer;
    // trailing.shift();
    // trailing.push({ x: clientX, y: clientY });
    // // console.log(trailing);
    // setTimeout(() => {
    //   setTrailing(trailing);
    // }, 100);
  }

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
      {range(nTrail).map((el, idx) => {
        return (
          <div
            key={idx}
            className="trailing cursor"
            style={{
              left: trailingState[el].x,
              top: trailingState[el].y,
              transition: trailingTiming,
            }}
          />
        );
      })}
    </div>
  );
}
