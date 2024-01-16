import React from "react";

export default function Alert(props) {
  return (
    <div style={{top: "1%"}} className={`position-absolute w-auto start-50 translate-middle-x alert alert-${props.alert.type}`} role="alert">
      {props.alert.msg}
    </div>
  );
}
