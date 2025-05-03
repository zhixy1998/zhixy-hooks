import React from "react";
import { useToggle } from "encodeHooks";
export default () => {
  const [state, { toggle, setLeft, setRight }] = useToggle();
  const buttonStyle = { marginRight: 10, backgroundColor: "red" };
  return (
    <div>
      <p>state: {state ? "true" : "false"}</p>
      <button style={buttonStyle} className="btn" onClick={toggle}>
        toggle
      </button>
      <button style={buttonStyle} onClick={setLeft}>
        setLeft
      </button>
      <button style={buttonStyle} onClick={setRight}>
        setRight
      </button>
    </div>
  );
};
