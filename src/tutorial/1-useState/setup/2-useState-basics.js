import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("hello Nigerians"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  // const [text, setText] = useState("Random title");
  const [text, setText] = useState("Random title");

  const handleClick = () => {
    if (text === "Random title") {
      setText("Hello Nigerians");
    } else {
      setText("Random title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
