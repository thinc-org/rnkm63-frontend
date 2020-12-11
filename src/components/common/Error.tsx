import React from "react";
import "./Error.css";

function Error({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="ErrorContainer">
      <h1>Error!!</h1>
      <h4>{title}</h4>
      <p>{detail}</p>
    </div>
  );
}

export default Error;
