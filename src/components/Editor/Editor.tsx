import React from "react";
import { Button } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useEditor, { IEditorStore } from "../store/useEditor";

const Editor = () => {
  const [editorStore, setters] = useEditor();
  const { quillConfig, quillValue } = editorStore as IEditorStore;
  const changeQuillValue = setters.changeQuillValue;

  return (
    <div>
      <ReactQuill
        {...quillConfig}
        value={quillValue}
        onChange={changeQuillValue}
      />
      <div>
        <Button>123</Button>
      </div>
    </div>
  );
};

export default Editor;
