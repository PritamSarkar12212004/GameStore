import React from "react";

function Wordle() {
  return (
    <div className=" h-[93vh] w-[100vw]  overflow-y-auto">
      <iframe
        src="https://www.kennyyipcoding.com/Wordle/"
        width="100%"
        height="100%"
        title="Whac-a-mole Game"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

export default Wordle;
