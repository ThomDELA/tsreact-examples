import React from "react";
import "./GlassBoard.css";

interface bubbleStyle {
  time?: string;
  posX?: string;
  delay?: string;
}
const st = ({ time, posX, delay }: bubbleStyle) => ({
  backgroundColor: "red",
  "--idx": time,
  "--posX": posX,
  "--delay": delay,
});

export default function Glassboard({ children }: { children?: JSX.Element }) {
  return (
    <div className="glassBoardContainer">
      <div
        style={st({ time: "8s", posX: "10%", delay: "3s" })}
        className="circle"
      ></div>
      <div
        style={st({ time: "8s", posX: "25%", delay: "10s" })}
        className="circle"
      ></div>
      <div
        style={st({ time: "10s", posX: "70%", delay: "2s" })}
        className="circle"
      ></div>
      <div
        style={st({ time: "11s", posX: "80%", delay: "1s" })}
        className="circle"
      ></div>
      <div
        style={st({ time: "12s", posX: "50%", delay: "2s" })}
        className="circle"
      ></div>
      <div
        style={st({ time: "15s", posX: "65%", delay: "3s" })}
        className="circle"
      ></div>
      <div
        style={st({ time: "11s", posX: "45%", delay: "4s" })}
        className="circle"
      ></div>
      <div
        style={st({ time: "15s", posX: "25%", delay: "5s" })}
        className="circle"
      ></div>
      <div
        style={st({ time: "15s", posX: "35%", delay: "6s" })}
        className="circle"
      ></div>
      <div className="glass"> {children} </div>
    </div>
  );
}
