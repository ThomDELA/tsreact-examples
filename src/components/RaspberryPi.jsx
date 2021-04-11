import React, { useEffect} from "react";
import { ReactComponent as RPIBoard } from "../assets/Board.svg";
import "../css/raspberrypi.css";

export default function RPi() {

    const  onPinClick = (pinNumber) => {
      console.log("Clicked");
      console.log(pinNumber);
    }
    
    useEffect(()=> {
        const iop = document.getElementById("IOPins");
        Object.values(iop.children).forEach( (value, idx) => {
          // console.log('key :', value, '  Value : ', idx);
          value.addEventListener("click", ()=>onPinClick(idx));
        });
    });

    return (
    <div>
      <RPIBoard />
    </div>
  );
}
