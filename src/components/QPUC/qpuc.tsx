import React from "react";
import "./qpuc.css";
import Button from "react-bootstrap/Button";

import data from "./question.json";

// function questComp(d: typeof data) {
//   console.log("Dips question");
//   console.log(d);
//   return Object.entries(d.questions).map(([, v]) => {
//     return (
//       <div>
//         <h2 className="Question">{v.question}</h2>
//         <div className="Answers">
//           {v.answers.map((answ) => (
//             <Button> {answ} </Button>
//           ))}
//         </div>
//       </div>
//     );
//   });
// }

function dispQuestion(d: typeof data, i: number) {
  console.log("Dips question");
  console.log(d);
  return Object.entries(data.questions)
    .filter(([k, v]) => k === i.toString())
    .map(([kk, v]) => {
      return (
        <>
          <h2 className="Question">{v.question}</h2>
          <div className="Answers">
            {v.answers.map((answ, idx) => (
              <Button key={idx}> {answ} </Button>
            ))}
          </div>
        </>
      );
    });
}

export default function Qpuc(props: any) {
  console.log(data.questions);
  const { title } = props;

  return (
    <div className="QPUCcontainer">
      <h1> {title} </h1>
      {dispQuestion(data, Object.entries(data).length - 1)}
    </div>
  );
}
