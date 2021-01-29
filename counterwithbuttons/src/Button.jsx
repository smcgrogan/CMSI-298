import React from "react";

export default function (props) {
  const { handleClick, title, value } = props;
  return <button onClick={() => handleClick(value)}>{title}</button>;
}
