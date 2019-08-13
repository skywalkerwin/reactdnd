import React from "react";
import ReactDOM from "react-dom";
//import Knight from "./Knight";
//import Square from "./Square";
import Board from "./Board";
import { observe } from "./Game";

const root = document.getElementById("root");

observe(knightPosition =>
  ReactDOM.render(<Board knightPosition={knightPosition} />, root)
);
