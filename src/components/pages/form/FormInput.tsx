import React from "react";

function FormInput(props: any) {
  return (
    <>
      <p>{props.userData.name}</p>
      <p>{props.userData.surname}</p>
      <button
        onClick={() => {
          props.setUserData({ ...props.userData, name: "Honkai" });
        }}
      >
        set data (test)
      </button>
    </>
  );
}

export default FormInput;
