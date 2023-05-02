import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [user, setUser] = useState(0);
  const [isError, setIsError] = useState(false);
  const [text, setText] = useState("Tims");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";
  console.log(secondValue);
  function increase() {
    setUser(user + 1);
  }

  return (
    <>
      <div>
        <h2>short circuiting {user}</h2>
        <button
          className="btn"
          onClick={() => {
            setIsError(!isError);
          }}
        >
          Toggle error
        </button>
        {/* {!isError && <h1>Error....</h1>} */}
        {isError ? (
          <p className="container"> there is error ...</p> //using the ternary operators
        ) : (
          <div>
            <h2>There is no error</h2>{" "}
          </div>
        )}
        <h1>{!text || "we are desperate people"}</h1>
        <button className="btn" onClick={increase}>
          Plus 1
        </button>
      </div>
    </>
  );
};

export default ShortCircuit;
