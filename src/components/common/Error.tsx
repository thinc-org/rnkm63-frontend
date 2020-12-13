import React from "react";
import "./Error.css";

interface IError {
  title: string;
  detail: string;
}

function Error({ title, detail }: IError) {
  return (
    <div className="ErrorContainer">
      <h1>Error!!</h1>
      <h4>{title}</h4>
      <p>{detail}</p>
    </div>
  );
}

export default Error;
