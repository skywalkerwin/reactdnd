import React from "react";

export default function Square({ black, children }) {
  const fill = black ? "black" : "white";
  const stroke = black ? "white" : "black";
  console.log(fill);

  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: "100%",
        height: "12vh"
      }}
    >
      {children}
    </div>
  );
}
