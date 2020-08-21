import React from "react";
import Image from "../../assets/404.png";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={Image} alt="404 image" height={400} />
      <h1 style={{ textAlign: "center" }}>
        Sorry this page is not availabe for now
      </h1>
      <h3>
        Go Back <a href="/">Home</a>
      </h3>
    </div>
  );
};

export default App;
