import React from "react";
import "./index.css";

const App = (props) => {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width="140"
      height="110"
      className="logo-cont"
    >
      <g>
        <rect
          className="path"
          x="40"
          y="20"
          width="80"
          height="80"
          fill={props.fill}
          stroke={props.stroke}
          strokeWidth="4"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <text
          x="46"
          y="75"
          fill={props.color}
          fontSize="3rem"
          className="text"
        >
          TG
        </text>
      </g>
    </svg>
  );
};

export default App;
