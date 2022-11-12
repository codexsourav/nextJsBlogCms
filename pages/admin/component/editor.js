import React, { useRef } from "react";
import "../../../authsts";
import JoditEditor from "jodit-react";
function Editor(props) {
  const editor = useRef(null);
  return (
    <JoditEditor
      ref={editor}
      className="inp"
      style={{ marginBottom: 30, height: 200 }}
      value={props.data}
      onChange={(d) => {
        props.update(d);
      }}
      tabIndex={1}
    />
  );
}

export default Editor;
